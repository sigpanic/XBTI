import { defineStore } from 'pinia';
import { TestEngine } from '../core/testEngine';
import { themeManager } from '../xbti/themeManager';
import type { TestResult, TestConfig } from '../protocol/types';

export const useTestStore = defineStore('test', {
  state: () => ({
    testEngine: new TestEngine(),
    currentQuestionIndex: 0,
    answers: {} as Record<string, string>,
    result: null as TestResult | null,
    isTestStarted: false,
    isTestCompleted: false,
    currentThemeId: '' as string
  }),

  getters: {
    currentTheme: (state): TestConfig | null => {
      if (!state.currentThemeId) return null;
      return themeManager.getTheme(state.currentThemeId) || null;
    },

    currentQuestion: (state) => {
      if (!state.isTestStarted || !state.currentThemeId) return null;
      const theme = themeManager.getTheme(state.currentThemeId);
      if (!theme) return null;
      return theme.questions[state.currentQuestionIndex];
    },

    progress: (state) => {
      if (!state.isTestStarted || !state.currentThemeId) return 0;
      const theme = themeManager.getTheme(state.currentThemeId);
      if (!theme) return 0;
      return ((state.currentQuestionIndex) / theme.questions.length) * 100;
    },

    isLastQuestion: (state) => {
      if (!state.isTestStarted || !state.currentThemeId) return false;
      const theme = themeManager.getTheme(state.currentThemeId);
      if (!theme) return false;
      return state.currentQuestionIndex === theme.questions.length - 1;
    },

    totalQuestions: (state) => {
      if (!state.currentThemeId) return 0;
      const theme = themeManager.getTheme(state.currentThemeId);
      return theme?.questions.length || 0;
    },

    allThemes: () => {
      return themeManager.getAllThemes();
    }
  },

  actions: {
    setTheme(themeId: string) {
      if (themeManager.getTheme(themeId)) {
        this.currentThemeId = themeId;
        this.resetTest();
      }
    },

    registerTheme(theme: TestConfig) {
      themeManager.registerTheme(theme);
    },

    startTest() {
      if (!this.currentThemeId) return;
      const theme = themeManager.getTheme(this.currentThemeId);
      if (!theme) return;

      this.testEngine.registerTest(theme);
      this.testEngine.startTest(theme.id);
      this.currentQuestionIndex = 0;
      this.answers = {};
      this.result = null;
      this.isTestStarted = true;
      this.isTestCompleted = false;
    },

    submitAnswer(optionId: string) {
      if (!this.isTestStarted || this.isTestCompleted) return;

      const currentQuestion = this.currentQuestion;
      if (!currentQuestion) return;

      this.answers[currentQuestion.id] = optionId;
      this.testEngine.submitAnswer(currentQuestion.id, optionId);

      this.currentQuestionIndex++;

      const theme = themeManager.getTheme(this.currentThemeId);
      if (!theme || this.currentQuestionIndex >= theme.questions.length) {
        return true;
      }
      
      return false;
    },

    completeTest() {
      if (!this.isTestStarted) return;

      this.result = this.testEngine.getResult();
      this.isTestCompleted = true;
    },

    resetTest() {
      this.testEngine.resetTest();
      this.currentQuestionIndex = 0;
      this.answers = {};
      this.result = null;
      this.isTestStarted = false;
      this.isTestCompleted = false;
    }
  }
});

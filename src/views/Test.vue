<template>
  <div class="test">
    <!-- Header -->
    <div class="test-header">
      <button class="back-btn" @click="goBack" aria-label="返回">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>返回</span>
      </button>

      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
        <span class="progress-text">{{ currentQuestionIndex + 1 }} / {{ totalQuestions }}</span>
      </div>

      <div class="theme-tag">
        <span>{{ currentThemeName }}</span>
      </div>
    </div>

    <!-- Question Card with Animation -->
    <transition 
      name="question-transition"
      mode="out-in"
    >
      <div v-if="currentQuestion && !showDistillation" :key="currentQuestion.id" class="question-wrapper">
        <div class="question-card">
          <!-- Question Number Badge -->
          <div class="q-number-badge">
            <span>Q{{ currentQuestionIndex + 1 }}</span>
          </div>

          <!-- Question Text -->
          <h2 class="q-text">{{ currentQuestion.text }}</h2>

          <!-- Options List -->
          <div class="options-grid">
            <button
              v-for="(option, idx) in currentQuestion.options"
              :key="option.id"
              class="option-card"
              :class="{ 
                selected: selectedOption === option.id,
                [`stagger-${idx}`]: true
              }"
              @click="selectOption(option.id)"
            >
              <span class="opt-label">{{ option.id.toUpperCase() }}</span>
              <span class="opt-text">{{ option.text }}</span>
              
              <div class="opt-check-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </button>
          </div>

          <!-- Navigation Buttons (Left: Previous, Right: Next/Distill) -->
          <div class="navigation-area">
            <button
              class="nav-btn prev-btn"
              :disabled="currentQuestionIndex === 0"
              @click="goToPreviousQuestion"
              aria-label="上一题"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              <span>上一题</span>
            </button>

            <button
              v-if="!isLastQuestion"
              class="nav-btn next-btn"
              :disabled="!selectedOption"
              :class="{ active: selectedOption }"
              @click="submitAndNext"
              aria-label="下一题"
            >
              <span>下一题 →</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <button
              v-else
              class="nav-btn distill-btn"
              :disabled="!selectedOption"
              :class="{ active: selectedOption }"
              @click="startDistillation"
              aria-label="开始蒸馏"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 3v14l8.5-7L9 3z"/>
              </svg>
              <span>开始蒸馏</span>
              <div class="btn-shine"></div>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Distillation Animation Overlay -->
    <transition name="distill-fade">
      <div v-if="showDistillation" class="distill-overlay">
        <div class="distill-content">
          <!-- Flask Animation -->
          <div class="flask-wrapper">
            <div class="flask-neck"></div>
            <div class="flask-body">
              <div class="liquid-fill">
                <div class="wave-effect"></div>
              </div>
              
              <!-- Bubbles -->
              <div class="bubbles-container">
                <div 
                  v-for="n in 14" 
                  :key="'bub-' + n"
                  class="bubble-particle"
                  :style="{ 
                    left: `${Math.random() * 75}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.4 + Math.random() * 0.8}s`
                  }"
                ></div>
              </div>
            </div>
            
            <!-- Steam Particles -->
            <div class="steam-container">
              <div 
                v-for="n in 7" 
                :key="'stm-' + n"
                class="steam-particle"
                :style="{ 
                  left: `${15 + Math.random() * 70}%`,
                  animationDelay: `${Math.random() * 2.5}s`
                }"
              ></div>
            </div>
          </div>
          
          <h3 class="distill-heading">正在蒸馏你的人格...</h3>
          <p class="distill-subtext">提取核心特征 · 分析维度分布 · 匹配人格模板</p>
          
          <!-- Step Indicators -->
          <div class="step-indicators">
            <div 
              v-for="(step, i) in distillSteps" 
              :key="i"
              class="step-item"
              :class="{ active: currentStep >= i, completed: currentStep > i }"
            >
              <span class="step-emoji">{{ step.icon }}</span>
              <span class="step-name">{{ step.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Loading State -->
    <div v-if="!currentQuestion && !showDistillation" class="loading-view">
      <div class="spinner-ring"></div>
      <p>准备中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTestStore } from '../stores/testStore';

const router = useRouter();
const testStore = useTestStore();

const selectedOption = ref<string | null>(null);
const showDistillation = ref(false);
const currentStep = ref(0);

const currentQuestion = computed(() => testStore.currentQuestion);
const currentQuestionIndex = computed(() => testStore.currentQuestionIndex);
const isLastQuestion = computed(() => testStore.isLastQuestion);
const progress = computed(() => testStore.progress);
const totalQuestions = computed(() => testStore.totalQuestions);

const currentThemeName = computed(() => {
  const theme = testStore.currentTheme;
  return theme?.name || '测试';
});

const distillSteps = [
  { icon: '📊', label: '维度分析' },
  { icon: '🎯', label: '证据匹配' },
  { icon: '✨', label: '人格生成' }
];

let stepTimer: ReturnType<typeof setInterval>;

watch(showDistillation, (val) => {
  if (val) {
    currentStep.value = 0;
    stepTimer = setInterval(() => {
      if (currentStep.value < 2) {
        currentStep.value++;
      }
    }, 550);
  } else {
    clearInterval(stepTimer);
  }
});

const selectOption = (optionId: string) => {
  selectedOption.value = optionId;
  
  // Auto advance to next question after selection (with small delay for visual feedback)
  setTimeout(() => {
    if (!isLastQuestion.value && selectedOption.value === optionId) {
      submitAndNext();
    }
  }, 400); // 400ms delay to let user see the selection
};

const submitAndNext = () => {
  if (!selectedOption.value) return;
  
  const isCompleted = testStore.submitAnswer(selectedOption.value);
  selectedOption.value = null;

  if (isCompleted) {
    // If this was the last question, start distillation
    setTimeout(() => {
      startDistillation();
    }, 350);
  }
  // Otherwise, the transition will automatically show next question
};

const goToPreviousQuestion = () => {
  if (testStore.currentQuestionIndex > 0) {
    testStore.goToPreviousQuestion();
    selectedOption.value = null;
  }
};

const startDistillation = () => {
  if (!selectedOption.value && !isLastQuestion.value) return;
  
  // Submit last answer if not already submitted
  if (selectedOption.value) {
    testStore.submitAnswer(selectedOption.value);
    selectedOption.value = null;
  }

  setTimeout(() => {
    showDistillation.value = true;
    
    setTimeout(() => {
      testStore.completeTest();
      router.push('/result');
    }, 2600);
  }, 350);
};

const goBack = () => {
  if (confirm('确定要退出吗？当前进度将会丢失。')) {
    testStore.resetTest();
    router.push('/');
  }
};

onMounted(() => {
  if (!testStore.isTestStarted) {
    router.push('/');
  }
});
</script>

<style scoped>
/* ===== Global Styles ===== */
.test {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  color: #1e293b;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 2rem;
}

/* ===== Header ===== */
.test-header {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-bottom: 2.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.88rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.back-btn:hover {
  border-color: #0ea5e9;
  color: #0ea5e9;
  transform: translateX(-4px);
}

.progress-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
  border-radius: 3px;
  transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.35);
}

.progress-text {
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 600;
  min-width: 48px;
  text-align: right;
  font-family: 'SF Mono', Monaco, monospace;
}

.theme-tag {
  padding: 0.55rem 1.1rem;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 8px;
  color: #0369a1;
  font-size: 0.84rem;
  font-weight: 600;
}

/* ===== Question Card ===== */
.question-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.question-card {
  background: white;
  border-radius: 22px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f5f9;
  overflow: hidden;
}

.q-number-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1.1rem;
  background: linear-gradient(135deg, #f0f9ff, #ede9fe);
  border: 1px solid #bae6fd;
  border-radius: 18px;
  margin: 2.2rem 2.5rem 1.5rem;
}

.q-number-badge span {
  color: #0ea5e9;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: 'SF Mono', Monaco, monospace;
}

.q-text {
  font-size: 1.5rem;
  line-height: 1.5;
  color: #1e293b;
  font-weight: 600;
  margin: 0 2.5rem 2rem;
  letter-spacing: -0.01em;
}

/* ===== Options ===== */
.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 0 2.5rem;
  margin-bottom: 2.2rem;
}

.option-card {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.15rem 1.35rem;
  background: #fafafa;
  border: 1.5px solid #f1f5f9;
  border-radius: 13px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-align: left;
}

.option-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.04), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.option-card:hover::after {
  opacity: 1;
}

.option-card:hover {
  background: white;
  border-color: #bae6fd;
  transform: translateX(7px);
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.08);
}

.option-card.selected {
  background: #f0f9ff;
  border-color: #0ea5e9;
  box-shadow: 
    0 0 25px rgba(14, 165, 233, 0.12),
    inset 0 0 16px rgba(14, 165, 233, 0.04);
}

.option-card.selected .opt-label {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  color: white;
  transform: scale(1.08);
  box-shadow: 0 3px 12px rgba(14, 165, 233, 0.35);
}

.option-card.selected .opt-check-icon {
  opacity: 1;
  transform: scale(1);
}

.opt-label {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border: 1.5px solid #e2e8f0;
  border-radius: 9px;
  color: #64748b;
  font-weight: 700;
  font-size: 0.92rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.opt-text {
  flex: 1;
  line-height: 1.5;
  color: #334155;
  font-size: 1rem;
}

.opt-check-icon {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  border-radius: 50%;
  color: white;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Stagger delays */
.stagger-0 { animation-delay: 0s; }
.stagger-1 { animation-delay: 0.06s; }
.stagger-2 { animation-delay: 0.12s; }

/* ===== Navigation Area ===== */
.navigation-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem 2.2rem;
  gap: 1.5rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.95rem 1.8rem;
  background: white;
  border: 1.5px solid #e2e8f0;
  border-radius: 13px;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.nav-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none !important;
}

.prev-btn:not(:disabled):hover {
  border-color: #94a3b8;
  color: #334155;
  transform: translateX(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.next-btn.active,
.distill-btn.active {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  border-color: transparent;
  color: white;
  box-shadow: 0 7px 26px rgba(14, 165, 233, 0.32);
}

.next-btn.active:hover:not(:disabled),
.distill-btn.active:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 36px rgba(14, 165, 233, 0.42);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.28),
    transparent
  );
  transition: left 0.55s ease;
}

.distill-btn.active:hover .btn-shine {
  left: 100%;
}

/* ===== Transitions - PURE opacity (no movement, will-change for GPU acceleration) ===== */
.question-transition-enter-active {
  transition: opacity 1.5s ease-in-out;
  will-change: opacity;
}

.question-transition-leave-active {
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
}

.question-transition-enter-from,
.question-transition-leave-to {
  opacity: 0;
}

.distill-fade-enter-active,
.distill-fade-leave-active {
  transition: all 0.45s ease;
}

.distill-fade-enter-from,
.distill-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

/* ===== Distillation Animation ===== */
.distill-overlay {
  position: fixed;
  inset: 0;
  background: rgba(248, 250, 252, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.distill-content {
  text-align: center;
  max-width: 480px;
  padding: 2.5rem;
}

.flask-wrapper {
  position: relative;
  width: 150px;
  height: 210px;
  margin: 0 auto 2.2rem;
}

.flask-neck {
  position: absolute;
  bottom: 135px;
  left: 50%;
  transform: translateX(-50%);
  width: 42px;
  height: 68px;
  background: linear-gradient(180deg, #ede9fe 0%, #dbeafe 100%);
  border-radius: 21px 21px 0 0;
  border: 2px solid #c7d2fe;
  border-bottom: none;
}

.flask-body {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 105px;
  height: 145px;
  background: linear-gradient(180deg, #eff6ff 0%, #ede9fe 100%);
  border-radius: 52px 52px 22px 22px;
  border: 2px solid #c7d2fe;
  overflow: hidden;
}

.liquid-fill {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 86px;
  height: 115px;
  background: linear-gradient(180deg, rgba(14, 165, 233, 0.55), rgba(139, 92, 246, 0.85));
  border-radius: 43px 43px 17px 17px;
  animation: liquid-rise-up 2.3s ease-out forwards;
  overflow: hidden;
}

@keyframes liquid-rise-up {
  0% { height: 0; }
  72% { height: 108px; }
  82% { height: 103px; }
  100% { height: 112px; }
}

.wave-effect {
  position: absolute;
  top: -4px;
  left: -10%;
  width: 120%;
  height: 18px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.45) 0%, transparent 70%);
  animation: wave-motion 2s ease-in-out infinite;
}

@keyframes wave-motion {
  0%, 100% { transform: translateX(-8%) translateY(0); }
  50% { transform: translateX(8%) translateY(-2px); }
}

.bubbles-container {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 86px;
  height: 108px;
  overflow: hidden;
}

.bubble-particle {
  position: absolute;
  bottom: 0;
  width: 7px;
  height: 7px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  animation: bubble-float 1.9s ease-out infinite;
}

@keyframes bubble-float {
  0% {
    transform: translateY(0) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translateY(-105px) scale(1.15);
    opacity: 0;
  }
}

.steam-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.steam-particle {
  position: absolute;
  top: 18px;
  width: 5px;
  height: 5px;
  background: rgba(148, 163, 184, 0.4);
  border-radius: 50%;
  filter: blur(2.5px);
  animation: steam-drift 2.8s ease-out infinite;
}

@keyframes steam-drift {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.55;
  }
  100% {
    transform: translateY(-75px) scale(2.3);
    opacity: 0;
  }
}

.distill-heading {
  font-size: 1.7rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.7rem;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.distill-subtext {
  color: #64748b;
  font-size: 0.98rem;
  margin-bottom: 2.8rem;
  letter-spacing: 0.02em;
}

.step-indicators {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  opacity: 0.28;
  transition: all 0.5s ease;
  transform: translateY(8px);
}

.step-item.active {
  opacity: 1;
  transform: translateY(0);
}

.step-item.completed {
  opacity: 0.65;
}

.step-emoji {
  font-size: 1.9rem;
  filter: grayscale(1);
  transition: all 0.4s ease;
}

.step-item.active .step-emoji {
  filter: grayscale(0);
  transform: scale(1.12);
  animation: step-bounce 0.55s ease;
}

@keyframes step-bounce {
  0%, 100% { transform: scale(1.12); }
  50% { transform: scale(1.28); }
}

.step-name {
  font-size: 0.83rem;
  color: #94a3b8;
  font-weight: 600;
}

.step-item.active .step-name {
  color: #0ea5e9;
}

/* ===== Loading ===== */
.loading-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 58vh;
  gap: 1.8rem;
}

.spinner-ring {
  width: 54px;
  height: 54px;
  border: 3px solid #e2e8f0;
  border-top-color: #0ea5e9;
  border-radius: 50%;
  animation: spin-animation 1s linear infinite;
  box-shadow: 0 0 18px rgba(14, 165, 233, 0.28);
}

@keyframes spin-animation {
  to { transform: rotate(360deg); }
}

.loading-view p {
  color: #94a3b8;
  font-size: 0.98rem;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .test {
    padding: 1.5rem;
  }

  .test-header {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .back-btn span {
    display: none;
  }

  .progress-container {
    order: 3;
    flex-basis: 100%;
  }

  .theme-tag {
    font-size: 0.8rem;
    padding: 0.48rem 1rem;
  }

  .q-text {
    font-size: 1.28rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .options-grid {
    padding: 0 1.5rem;
  }

  .option-card {
    padding: 1rem 1.15rem;
  }

  .opt-text {
    font-size: 0.96rem;
  }

  .navigation-area {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }

  .nav-btn {
    width: 100%;
    justify-content: center;
  }

  .distill-content {
    padding: 2rem 1.5rem;
  }

  .flask-wrapper {
    transform: scale(0.85);
  }

  .step-indicators {
    gap: 1.3rem;
  }

  .step-name {
    font-size: 0.78rem;
  }
}
</style>

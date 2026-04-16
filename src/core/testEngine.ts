import { TestProtocol } from '../protocol/interface';
import type { TestConfig, TestResult } from '../protocol/types';

export class TestEngine {
  private protocol: TestProtocol;

  constructor() {
    this.protocol = new TestProtocol();
  }

  /**
   * 注册测评
   */
  registerTest(test: TestConfig): void {
    this.protocol.registerTest(test);
  }

  /**
   * 开始测评
   */
  startTest(testId: string): void {
    this.protocol.startTest(testId);
  }

  /**
   * 提交答案
   */
  submitAnswer(questionId: string, optionId: string): void {
    this.protocol.submitAnswer(questionId, optionId);
  }

  /**
   * 获取测评结果
   */
  getResult(): TestResult {
    return this.protocol.getResult();
  }

  /**
   * 重置测评
   */
  resetTest(): void {
    this.protocol.resetTest();
  }

  /**
   * 计算维度分数
   * 这里可以添加更复杂的计算逻辑
   */
  calculateDimensions(answers: Record<string, string>, questions: any[]): Record<string, number> {
    const dimensionScores: Record<string, number> = {};

    // 初始化维度分数
    questions.forEach(question => {
      question.options.forEach((option: any) => {
        Object.keys(option.scores).forEach(dimensionId => {
          if (!dimensionScores[dimensionId]) {
            dimensionScores[dimensionId] = 0;
          }
        });
      });
    });

    // 计算每个问题的得分
    questions.forEach(question => {
      const selectedOptionId = answers[question.id];
      if (selectedOptionId) {
        const option = question.options.find((opt: any) => opt.id === selectedOptionId);
        if (option) {
          // 累加每个维度的分数
          Object.entries(option.scores).forEach(([dimensionId, score]) => {
            if (dimensionScores[dimensionId] !== undefined) {
              dimensionScores[dimensionId] += score;
            }
          });
        }
      }
    });

    // 归一化分数到1-3区间
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 使用测试版的归一化因子10
      const normalizedScore = (score / 10) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });

    return dimensionScores;
  }

  /**
   * 计算与人格类型的匹配度
   * 这里可以添加更复杂的匹配算法
   */
  calculatePersonalityMatch(dimensions: Record<string, number>, personalityTemplates: any[]): { personalityType: any; matchPercentage: number } {
    let bestMatch: any = null;
    let highestSimilarity = -1;

    personalityTemplates.forEach(personalityType => {
      const similarity = this.calculateSimilarity(dimensions, personalityType.template);
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        bestMatch = personalityType;
      }
    });

    if (!bestMatch) {
      throw new Error('No personality type found');
    }

    return {
      personalityType: bestMatch,
      matchPercentage: Math.round(highestSimilarity * 100)
    };
  }

  /**
   * 计算相似度（使用测试版的简单欧几里得距离算法）
   */
  private calculateSimilarity(userDimensions: Record<string, number>, templateDimensions: Record<string, number>): number {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 简单的欧几里得距离
    let distance = 0;
    commonDimensions.forEach(dimension => {
      const diff = userDimensions[dimension] - templateDimensions[dimension];
      distance += diff * diff;
    });
    distance = Math.sqrt(distance);
    
    // 转换为相似度（距离越小，相似度越高）
    const maxDistance = Math.sqrt(commonDimensions.length * 4);
    const similarity = 1 - (distance / maxDistance);
    
    return Math.max(0, similarity);
  }
}

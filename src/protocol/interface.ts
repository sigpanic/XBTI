import type { TestInterface, ExtensionInterface, TestConfig, Dimension, PersonalityType, TestResult } from './types';

export class TestProtocol implements TestInterface, ExtensionInterface {
  private currentTest: TestConfig | null = null;
  private answers: Record<string, string> = {};
  private dimensions: Dimension[] = [];
  private personalityTypes: PersonalityType[] = [];
  private tests: TestConfig[] = [];

  getRegisteredTests(): TestConfig[] {
    return [...this.tests];
  }

  startTest(testId: string): void {
    const test = this.tests.find(t => t.id === testId);
    if (!test) {
      throw new Error(`Test with id ${testId} not found`);
    }
    this.currentTest = test;
    this.answers = {};
  }

  submitAnswer(questionId: string, optionId: string): void {
    if (!this.currentTest) {
      throw new Error('No test started');
    }
    this.answers[questionId] = optionId;
  }

  getResult(): TestResult {
    if (!this.currentTest) {
      throw new Error('No test started');
    }

    // 计算维度分数
    const dimensions = this.calculateDimensions();

    // 计算与人格类型的匹配度
    const { personalityType, matchPercentage } = this.calculatePersonalityMatch(dimensions);

    // 生成雷达图数据
    const radarChart = Object.entries(dimensions).map(([dimension, value]) => ({
      dimension,
      value
    }));

    // 生成解读
    const interpretation = this.generateInterpretation(personalityType);

    return {
      personality_type: personalityType.id,
      match_percentage: matchPercentage,
      dimensions,
      radar_chart: radarChart,
      interpretation
    };
  }

  resetTest(): void {
    this.currentTest = null;
    this.answers = {};
  }

  registerDimension(dimension: Dimension): void {
    this.dimensions.push(dimension);
  }

  registerPersonalityType(personalityType: PersonalityType): void {
    this.personalityTypes.push(personalityType);
  }

  registerTest(test: TestConfig): void {
    this.tests.push(test);
    // 同时注册测试中的维度和人格类型
    test.dimensions.forEach(dimension => this.registerDimension(dimension));
    test.personalityTypes.forEach(personalityType => this.registerPersonalityType(personalityType));
  }

  private calculateDimensions(): Record<string, number> {
    if (!this.currentTest) {
      throw new Error('No test started');
    }

    const dimensionScores: Record<string, number> = {};

    // 初始化维度分数
    this.currentTest.dimensions.forEach(dimension => {
      dimensionScores[dimension.id] = 0;
    });

    // 计算每个问题的得分
    this.currentTest.questions.forEach(question => {
      const selectedOptionId = this.answers[question.id];
      if (selectedOptionId) {
        const option = question.options.find(opt => opt.id === selectedOptionId);
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
    const maxScore = this.currentTest.maxScorePerDimension || 15;
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      const normalizedScore = (score / maxScore) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });

    return dimensionScores;
  }

  private calculatePersonalityMatch(dimensions: Record<string, number>): { personalityType: PersonalityType; matchPercentage: number } {
    if (!this.currentTest) {
      throw new Error('No test started');
    }

    const dimensionWeights = this.currentTest.dimensionWeights || {};

    let bestMatch: PersonalityType | null = null;
    let highestSimilarity = -1;

    this.currentTest.personalityTypes.forEach(personalityType => {
      const similarity = this.calculateSimilarity(dimensions, personalityType.template, dimensionWeights);
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

  private calculateSimilarity(userDimensions: Record<string, number>, templateDimensions: Record<string, number>, dimensionWeights: Record<string, number>): number {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    const weightValues = Object.values(dimensionWeights);
    const maxWeight = weightValues.length > 0 
      ? Math.max(...weightValues) 
      : 1.0;
    
    // 计算加权余弦相似度
    let weightedDotProduct = 0;
    let weightedUserMagnitude = 0;
    let weightedTemplateMagnitude = 0;
    
    commonDimensions.forEach(dimension => {
      const weight = dimensionWeights[dimension] || 1.0;
      const userValue = userDimensions[dimension];
      const templateValue = templateDimensions[dimension];
      
      weightedDotProduct += userValue * templateValue * weight;
      weightedUserMagnitude += userValue * userValue * weight;
      weightedTemplateMagnitude += templateValue * templateValue * weight;
    });
    
    weightedUserMagnitude = Math.sqrt(weightedUserMagnitude);
    weightedTemplateMagnitude = Math.sqrt(weightedTemplateMagnitude);
    
    if (weightedUserMagnitude === 0 || weightedTemplateMagnitude === 0) {
      return 0;
    }
    
    // 计算余弦相似度
    const cosineSimilarity = weightedDotProduct / (weightedUserMagnitude * weightedTemplateMagnitude);
    
    // 计算欧几里得距离
    let euclideanDistance = 0;
    commonDimensions.forEach(dimension => {
      const weight = dimensionWeights[dimension] || 1.0;
      const diff = userDimensions[dimension] - templateDimensions[dimension];
      euclideanDistance += diff * diff * weight;
    });
    euclideanDistance = Math.sqrt(euclideanDistance);
    
    // 归一化欧几里得距离到0-1范围
    const maxPossibleDistance = Math.sqrt(commonDimensions.length * 4 * maxWeight);
    const normalizedEuclidean = 1 - Math.min(1, euclideanDistance / maxPossibleDistance);
    
    // 组合两种相似度度量
    const finalSimilarity = (cosineSimilarity * 0.7) + (normalizedEuclidean * 0.3);
    
    return finalSimilarity;
  }

  private generateInterpretation(personalityType: PersonalityType): string {
    return personalityType.description;
  }
}

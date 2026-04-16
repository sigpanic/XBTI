import { TestProtocol } from '../protocol/interface.ts';
import type { TestConfig, PersonalityType } from '../protocol/types.ts';

export interface DistributionResult {
  typeId: string;
  typeName: string;
  percentage: number;
  count: number;
}

export interface TestStatistics {
  averagePercentage: number;
  minPercentage: number;
  maxPercentage: number;
  stdDev: number;
  totalCombinations: number;
  personalityTypesCount: number;
  isReasonable: boolean;
}

export interface ValidationReport {
  config: TestConfig;
  distribution: DistributionResult[];
  statistics: TestStatistics;
  isReasonable: boolean;
}

/**
 * Generic test runner - 引用正式版 TestProtocol 引擎
 * 可用于 CI 自动验证和 AI Agent 手动验证
 */
export class GenericTestRunner {
  private protocol: TestProtocol;

  constructor(config: TestConfig) {
    this.protocol = new TestProtocol();
    this.protocol.registerTest(config);
  }

  /**
   * 计算所有可能的答案组合
   */
  private generateAllAnswerCombinations(questions: TestConfig['questions']): Record<string, string>[] {
    const questionIds = questions.map(q => q.id);
    const optionIds = questions.map(q => q.options.map(opt => opt.id));
    
    let combinations: string[][] = [[]];
    
    for (let i = 0; i < questionIds.length; i++) {
      const currentOptions = optionIds[i];
      const newCombinations: string[][] = [];
      
      for (const combination of combinations) {
        for (const option of currentOptions) {
          newCombinations.push([...combination, option]);
        }
      }
      
      combinations = newCombinations;
    }
    
    return combinations.map(combination => {
      const answers: Record<string, string> = {};
      questionIds.forEach((id, i) => {
        answers[id] = combination[i];
      });
      return answers;
    });
  }

  /**
   * 生成随机答案（用于小规模测试）
   */
  generateRandomAnswers(questions: TestConfig['questions']): Record<string, string> {
    const answers: Record<string, string> = {};
    for (const question of questions) {
      const randomIndex = Math.floor(Math.random() * question.options.length);
      answers[question.id] = question.options[randomIndex].id;
    }
    return answers;
  }

  /**
   * 使用 TestProtocol 运行测试并获取结果
   */
  runTest(answers: Record<string, string>) {
    this.protocol.resetTest();
    this.protocol.startTest((this.protocol as any).tests[0].id);
    
    Object.entries(answers).forEach(([qId, optId]) => {
      this.protocol.submitAnswer(qId, optId);
    });
    
    return this.protocol.getResult();
  }

  /**
   * 大规模枚举测试
   * @param maxCombinations 最大枚举数量限制（默认 5,000,000）
   */
  async runLargeScaleTest(maxCombinations: number = 5_000_000): Promise<ValidationReport> {
    const config = (this.protocol as any).tests[0];
    const allCombinations = this.generateAllAnswerCombinations(config.questions);
    const totalCombinations = allCombinations.length;
    
    // 智能剪枝：如果组合数超过限制，采用抽样策略
    let combinationsToTest = allCombinations;
    let isSampled = false;
    
    if (totalCombinations > maxCombinations) {
      isSampled = true;
      combinationsToTest = this.sampleCombinations(allCombinations, maxCombinations);
    }
    
    const resultDistribution: Record<string, number> = {};
    config.personalityTypes.forEach((type: PersonalityType) => {
      resultDistribution[type.id] = 0;
    });
    
    let processed = 0;
    const total = combinationsToTest.length;
    
    for (const answers of combinationsToTest) {
      const result = this.runTest(answers);
      resultDistribution[result.personality_type]++;
      
      processed++;
      if (processed % 10000 === 0) {
        console.log(`已处理 ${processed}/${total} (${((processed/total)*100).toFixed(2)}%)`);
      }
    }
    
    const distributionPercentages: Record<string, number> = {};
    Object.entries(resultDistribution).forEach(([typeId, count]) => {
      distributionPercentages[typeId] = (count / total) * 100;
    });
    
    const distribution: DistributionResult[] = Object.entries(distributionPercentages)
      .map(([typeId, percentage]) => {
        const type = config.personalityTypes.find((t: PersonalityType) => t.id === typeId);
        return {
          typeId,
          typeName: type.name,
          percentage,
          count: resultDistribution[typeId]
        };
      })
      .sort((a, b) => b.percentage - a.percentage);
    
    const percentages = Object.values(distributionPercentages);
    const avgPercentage = percentages.reduce((sum, p) => sum + p, 0) / percentages.length;
    const minPercentage = Math.min(...percentages);
    const maxPercentage = Math.max(...percentages);
    const variance = percentages.reduce((sum, p) => sum + Math.pow(p - avgPercentage, 2), 0) / percentages.length;
    const stdDev = Math.sqrt(variance);
    
    const statistics: TestStatistics = {
      averagePercentage: avgPercentage,
      minPercentage,
      maxPercentage,
      stdDev,
      totalCombinations: isSampled ? totalCombinations : total,
      personalityTypesCount: config.personalityTypes.length,
      isReasonable: this.checkReasonable(percentages, avgPercentage)
    };
    
    return {
      config,
      distribution,
      statistics,
      isReasonable: statistics.isReasonable
    };
  }

  /**
   * 小规模随机测试
   */
  runSmallScaleTest(sampleCount: number = 20): any[] {
    const config = (this.protocol as any).tests[0];
    const results: any[] = [];
    
    for (let i = 0; i < sampleCount; i++) {
      const answers = this.generateRandomAnswers(config.questions);
      const result = this.runTest(answers);
      results.push({
        index: i + 1,
        personality_type: result.personality_type,
        personality_name: result.interpretation.name,
        match_percentage: result.match_percentage
      });
    }
    
    return results;
  }

  /**
   * 智能抽样
   */
  private sampleCombinations(combinations: Record<string, string>[], maxCount: number): Record<string, string>[] {
    const sample: Record<string, string>[] = [];
    const step = Math.max(1, Math.floor(combinations.length / maxCount));
    
    for (let i = 0; i < combinations.length && sample.length < maxCount; i += step) {
      sample.push(combinations[i]);
    }
    
    return sample;
  }

  /**
   * 检查分布是否合理
   */
  private checkReasonable(percentages: number[], avgPercentage: number): boolean {
    let zeroValues = 0;
    
    for (const p of percentages) {
      if (p < 1) {
        zeroValues++;
      }
    }
    
    // 验收标准：
    // 1. 所有类型都能被触发（无 0%）
    // 2. 最大值不超过 30%
    // 3. 最小值 >= 1%
    // 4. 标准差不超过 8
    const maxPercentage = Math.max(...percentages);
    const minPercentage = Math.min(...percentages);
    const variance = percentages.reduce((sum, p) => sum + Math.pow(p - avgPercentage, 2), 0) / percentages.length;
    const stdDev = Math.sqrt(variance);
    
    const reasonable = zeroValues === 0 &&
                      maxPercentage <= 30 &&
                      minPercentage >= 1 &&
                      stdDev <= 8;
    
    return reasonable;
  }

  /**
   * 打印测试报告
   */
  printReport(report: ValidationReport) {
    console.log('\n' + '='.repeat(50));
    console.log(`测评验证报告: ${report.config.name}`);
    console.log('='.repeat(50));
    
    console.log('\n=== 结果分布 ===');
    report.distribution.forEach((item, index) => {
      console.log(`${index + 1}. ${item.typeName}: ${item.percentage.toFixed(2)}% (${item.count})`);
    });
    
    console.log('\n=== 统计信息 ===');
    console.log(`总组合数: ${report.statistics.totalCombinations.toLocaleString()}`);
    console.log(`人格类型数: ${report.statistics.personalityTypesCount}`);
    console.log(`平均百分比: ${report.statistics.averagePercentage.toFixed(2)}%`);
    console.log(`最小百分比: ${report.statistics.minPercentage.toFixed(2)}%`);
    console.log(`最大百分比: ${report.statistics.maxPercentage.toFixed(2)}%`);
    console.log(`标准差: ${report.statistics.stdDev.toFixed(2)}`);
    console.log(`是否合理: ${report.isReasonable ? '✅ 通过' : '❌ 不通过'}`);
    console.log('='.repeat(50) + '\n');
  }
}

/**
 * 便捷函数：验证一个测试配置
 */
export async function validateTestConfig(config: TestConfig, options?: {
  maxCombinations?: number;
  printReport?: boolean;
}): Promise<ValidationReport> {
  const runner = new GenericTestRunner(config);
  const report = await runner.runLargeScaleTest(options?.maxCombinations);
  
  if (options?.printReport !== false) {
    runner.printReport(report);
  }
  
  return report;
}

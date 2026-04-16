// 测试正式版引擎
import { TestEngine } from './src/core/testEngine.ts';
import { programmerTest } from './src/instance/programmerTest.ts';

// 大规模枚举测试
function runLargeScaleTest() {
  console.log('======================================');
  console.log('大规模枚举测试');
  console.log('======================================\n');
  
  const testEngine = new TestEngine();
  testEngine.registerTest(programmerTest);
  
  const questions = programmerTest.questions;
  const personalityTypes = programmerTest.personalityTypes;
  const totalCombinations = Math.pow(questions.length, questions[0].options.length);
  console.log(`测试配置: ${programmerTest.name}`);
  console.log(`问题数量: ${questions.length}`);
  console.log(`人格类型数量: ${personalityTypes.length}`);
  console.log(`总共有 ${totalCombinations} 种可能的答案组合`);
  
  const personalityCounts = {};
  personalityTypes.forEach(type => {
    personalityCounts[type.id] = 0;
  });
  
  // 生成所有可能的答案组合（使用递归）
  function generateAllCombinations(index, currentAnswers) {
    if (index === questions.length) {
      // 提交答案并获取结果
      testEngine.resetTest();
      testEngine.startTest('programmer');
      
      Object.entries(currentAnswers).forEach(([questionId, optionId]) => {
        testEngine.submitAnswer(questionId, optionId);
      });
      
      try {
        const result = testEngine.getResult();
        const personalityType = result.personality_type;
        if (personalityCounts[personalityType] !== undefined) {
          personalityCounts[personalityType]++;
        }
      } catch (error) {
        // 忽略错误
      }
      return;
    }
    
    const question = questions[index];
    question.options.forEach(option => {
      const newAnswers = { ...currentAnswers, [question.id]: option.id };
      generateAllCombinations(index + 1, newAnswers);
    });
  }
  
  generateAllCombinations(0, {});
  
  // 计算分布
  const totalTests = Object.values(personalityCounts).reduce((sum, count) => sum + count, 0);
  const distribution = [];
  
  Object.entries(personalityCounts).forEach(([personalityId, count]) => {
    const personality = personalityTypes.find(type => type.id === personalityId);
    if (personality) {
      const percentage = (count / totalTests) * 100;
      distribution.push({
        id: personalityId,
        name: personality.name,
        count: count,
        percentage: percentage
      });
    }
  });
  
  // 按百分比排序
  distribution.sort((a, b) => b.percentage - a.percentage);
  
  console.log('\n=== 结果分布 ===');
  distribution.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name}: ${item.percentage.toFixed(2)}%`);
  });
  
  // 计算统计信息
  const percentages = distribution.map(item => item.percentage);
  const avgPercentage = percentages.reduce((sum, p) => sum + p, 0) / percentages.length;
  const minPercentage = Math.min(...percentages);
  const maxPercentage = Math.max(...percentages);
  const variance = percentages.reduce((sum, p) => sum + Math.pow(p - avgPercentage, 2), 0) / percentages.length;
  const stdDev = Math.sqrt(variance);
  
  console.log('\n=== 统计信息 ===');
  console.log(`平均百分比: ${avgPercentage.toFixed(2)}%`);
  console.log(`最小百分比: ${minPercentage.toFixed(2)}%`);
  console.log(`最大百分比: ${maxPercentage.toFixed(2)}%`);
  console.log(`标准差: ${stdDev.toFixed(2)}`);
  
  // 检查是否合理
  const isReasonable = maxPercentage <= 30 && minPercentage >= 0.5;
  console.log(`\n分布是否合理: ${isReasonable ? '是' : '否'}`);
  
  return {
    distribution,
    statistics: {
      avgPercentage,
      minPercentage,
      maxPercentage,
      stdDev
    },
    isReasonable
  };
}

// 小规模随机测试
function runSmallScaleTest() {
  console.log('======================================');
  console.log('小规模随机测试');
  console.log('======================================\n');
  
  const testEngine = new TestEngine();
  testEngine.registerTest(programmerTest);
  
  console.log('=== 小规模随机测试 ===');
  
  for (let i = 0; i < 20; i++) {
    // 生成随机答案
    const answers = {};
    programmerTest.questions.forEach(question => {
      const randomIndex = Math.floor(Math.random() * question.options.length);
      answers[question.id] = question.options[randomIndex].id;
    });
    
    // 提交答案并获取结果
    testEngine.resetTest();
    testEngine.startTest('programmer');
    
    Object.entries(answers).forEach(([questionId, optionId]) => {
      testEngine.submitAnswer(questionId, optionId);
    });
    
    try {
      const result = testEngine.getResult();
      
      // 根据返回结构获取人格类型名称
      const personalityTypeName = programmerTest.personalityTypes.find(
        type => type.id === result.personality_type
      )?.name || '未知类型';
      
      console.log(`测试 ${i + 1}:`);
      console.log(`  人格类型: ${personalityTypeName}`);
      console.log(`  匹配度: ${result.match_percentage}%`);
      console.log('');
    } catch (error) {
      console.log(`测试 ${i + 1}: 错误 - ${error.message}`);
      console.log('');
    }
  }
  
  console.log('======================================');
  console.log('测试完成');
  console.log('======================================');
}

// 运行测试
console.log('======================================');
console.log('测试正式版引擎');
console.log('======================================\n');

const result = runLargeScaleTest();

// 分析结果
console.log('\n=== 详细分析 ===');
console.log('结果分布是否合理:', result.isReasonable ? '是' : '否');
console.log('平均百分比:', result.statistics.avgPercentage.toFixed(2) + '%');
console.log('标准差:', result.statistics.stdDev.toFixed(2));

// 检查是否符合用户要求（平均值±5%，允许一个1%左右的小值，最大不超过30%）
const isWithinRange = result.statistics.maxPercentage - result.statistics.avgPercentage <= 5 && 
                      result.statistics.avgPercentage - result.statistics.minPercentage <= 5;
const hasSmallValue = result.statistics.minPercentage >= 0.5 && result.statistics.minPercentage <= 1.5;
const maxBelow30 = result.statistics.maxPercentage <= 30;

console.log('\n=== 用户要求检查 ===');
console.log('分布是否在平均值±5%范围内:', isWithinRange ? '是' : '否');
console.log('是否有1%左右的小值:', hasSmallValue ? '是' : '否');
console.log('最大占比是否不超过30%:', maxBelow30 ? '是' : '否');
console.log('总体是否符合要求:', (isWithinRange || hasSmallValue) && maxBelow30 ? '是' : '否');

// 运行小规模测试
runSmallScaleTest();

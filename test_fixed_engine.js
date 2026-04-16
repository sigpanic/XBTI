// 测试修复后的正式版引擎
import { TestEngine } from './src/core/testEngine.ts';
import { programmerTest } from './src/instance/programmerTest.ts';

// 运行小规模随机测试
function runSmallScaleTest() {
  console.log('======================================');
  console.log('测试修复后的正式版引擎');
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
    
    const result = testEngine.getResult();
    
    // 根据返回结构获取人格类型名称
    const personalityTypeName = programmerTest.personalityTypes.find(
      type => type.id === result.personality_type
    )?.name || '未知类型';
    
    console.log(`测试 ${i + 1}:`);
    console.log(`  人格类型: ${personalityTypeName}`);
    console.log(`  匹配度: ${result.match_percentage}%`);
    console.log('');
  }
  
  console.log('======================================');
  console.log('测试完成');
  console.log('======================================');
}

// 运行测试
runSmallScaleTest();

// 测试归一化逻辑
import { programmerTest } from './src/instance/programmerTest.ts';

// 模拟正式版的归一化函数（修改后）
function normalizeScoresFixed(dimensionScores) {
  Object.keys(dimensionScores).forEach(dimensionId => {
    const score = dimensionScores[dimensionId];
    // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
    const normalizedScore = (score / 15) * 2 + 1;
    dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
  });
  return dimensionScores;
}

// 模拟正式版的归一化函数（修改前）
function normalizeScoresOld(dimensionScores) {
  Object.keys(dimensionScores).forEach(dimensionId => {
    const score = dimensionScores[dimensionId];
    // 假设每个维度最多有3个问题，每个问题最高3分，所以最高分为9
    const normalizedScore = (score / 9) * 2 + 1;
    dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
  });
  return dimensionScores;
}

// 测试两种归一化方法的差异
function testNormalization() {
  console.log('======================================');
  console.log('测试归一化逻辑');
  console.log('======================================\n');
  
  // 模拟一个用户的维度分数
  const testScores = {
    ai_dependency: 10,  // 假设回答了5个问题，每个问题平均2分
    agent_orchestration: 8,
    skill_distillation: 12,
    vibe_coding: 6,
    ai_supervision: 9,
    frontend_resilience: 11,
    cross_domain: 7,
    bug_hunting: 5,
    ai_cleanup: 4,
    colleague_skill: 13,
    llm_research: 14,
    innovation: 8,
    adaptability: 6,
    ethics: 5
  };
  
  console.log('原始分数:');
  console.log(testScores);
  console.log('');
  
  const oldNormalized = normalizeScoresOld({...testScores});
  console.log('修改前归一化结果:');
  console.log(oldNormalized);
  console.log('');
  
  const fixedNormalized = normalizeScoresFixed({...testScores});
  console.log('修改后归一化结果:');
  console.log(fixedNormalized);
  console.log('');
  
  console.log('差异:');
  Object.keys(testScores).forEach(key => {
    const diff = fixedNormalized[key] - oldNormalized[key];
    console.log(`${key}: ${diff.toFixed(3)}`);
  });
  
  console.log('\n======================================');
  console.log('测试完成');
  console.log('======================================');
}

// 运行测试
testNormalization();

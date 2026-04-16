// 使用测试版引擎测试正式// 使用测试版引擎测试正式版配置
import { GenericTestEngine, run// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest }// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  //// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimension// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) *// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(user// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key =>// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length ===// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding:// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_res// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_resilience: 1.2,
      cross// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_resilience: 1.2,
      cross_domain: 1.0,
      bug_hunting: 0.9,
// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_resilience: 1.2,
      cross_domain: 1.0,
      bug_hunting: 0.9,
      ai_cleanup: 0.8,
      colleague_skill: 1.3,
      llm_research: 1.// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_resilience: 1.2,
      cross_domain: 1.0,
      bug_hunting: 0.9,
      ai_cleanup: 0.8,
      colleague_skill: 1.3,
      llm_research: 1.2,
      innovation: 1.1// 使用测试版引擎测试正式版配置
import { GenericTestEngine, runTests } from './dev_test/generic_test_framework.js';
import { programmerTest } from './src/instance/programmerTest.ts';

// 自定义引擎，使用与测试版相同的算法
class CustomTestEngine extends GenericTestEngine {
  // 归一化分数
  normalizeScores(dimensionScores) {
    Object.keys(dimensionScores).forEach(dimensionId => {
      const score = dimensionScores[dimensionId];
      // 假设每个维度最多有5个问题，每个问题最高3分，所以最高分为15
      const normalizedScore = (score / 15) * 2 + 1;
      dimensionScores[dimensionId] = Math.max(1, Math.min(3, normalizedScore));
    });
  }

  // 计算相似度（使用与测试版相同的算法）
  calculateSimilarity(userDimensions, templateDimensions) {
    const commonDimensions = Object.keys(userDimensions).filter(key => templateDimensions[key] !== undefined);
    
    if (commonDimensions.length === 0) {
      return 0;
    }
    
    // 维度权重
    const dimensionWeights = {
      ai_dependency: 1.2,
      agent_orchestration: 1.1,
      skill_distillation: 1.0,
      vibe_coding: 0.9,
      ai_supervision: 1.1,
      frontend_resilience: 1.2,
      cross_domain: 1.0,
      bug_hunting: 0.9,
      ai_cleanup: 0.8,
      colleague_skill: 1.3,
      llm_research: 1.2,
      innovation: 1.1,
      adaptability: 1.0,
      ethics: 0.9

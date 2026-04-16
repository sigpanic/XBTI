// 测试结果分布的// 测试结果分布的脚本
const { programmerTest } = require('./// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

//// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandom// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  //// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.s// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  //// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
  let maxSimilarity = -1;
  let bestMatch = null;
  
// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
  let maxSimilarity = -1;
  let bestMatch = null;
  
  testConfig.personalityTypes.forEach(type => {
    const similarity = calculateSimilarity(sc// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
  let maxSimilarity = -1;
  let bestMatch = null;
  
  testConfig.personalityTypes.forEach(type => {
    const similarity = calculateSimilarity(scores, type.template);
    if (similarity > maxSimilarity) {
// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
  let maxSimilarity = -1;
  let bestMatch = null;
  
  testConfig.personalityTypes.forEach(type => {
    const similarity = calculateSimilarity(scores, type.template);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = type;
    }
  });
  
  return bestMatch;
// 测试结果分布的脚本
const { programmerTest } = require('./src/instance/programmerTest.ts');
const { calculateSimilarity } = require('./src/core/testEngine.ts');

// 模拟随机回答生成函数
function generateRandomAnswers(questions) {
  return questions.map(question => {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    return question.options[randomIndex].id;
  });
}

// 计算测试结果
function calculateResult(answers, testConfig) {
  const scores = {};
  
  // 初始化分数
  testConfig.dimensions.forEach(dim => {
    scores[dim.id] = 0;
  });
  
  // 计算分数
  testConfig.questions.forEach((question, index) => {
    const selectedOption = question.options.find(opt => opt.id === answers[index]);
    if (selectedOption && selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([dimId, score]) => {
        scores[dimId] += score;
      });
    }
  });
  
  // 计算与每个人格类型的相似度
  let maxSimilarity = -1;
  let bestMatch = null;
  
  testConfig.personalityTypes.forEach(type => {
    const similarity = calculateSimilarity(scores, type.template);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = type;
    }
  });
  
  return bestMatch;
}

// 运行多次测试并统计
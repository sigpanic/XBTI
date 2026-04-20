import type { TestConfig } from '../protocol/types';

export const algorithmCompetitionTest: TestConfig = {
  id: 'algorithm_competition',
  name: '算法竞赛选手人格测试',
  description: '测试你在算法竞赛中的思维模式和行为特征，揭示你的竞赛风格',
  dimensions: [
    {
      id: 'algorithm_thinking',
      name: '算法思维深度',
      description: '从线性思维到创造性思维的能力',
      min_label: '线性思维',
      max_label: '创造性思维'
    },
    {
      id: 'code_implementation',
      name: '代码实现能力',
      description: '将算法转化为代码的能力',
      min_label: '模板应用',
      max_label: '复杂代码编写'
    },
    {
      id: 'problem_abstraction',
      name: '问题抽象能力',
      description: '将具体问题抽象为数学模型的能力',
      min_label: '具象思维',
      max_label: '抽象思维'
    },
    {
      id: 'debugging_skill',
      name: '调试能力',
      description: '定位和解决问题的能力',
      min_label: '依赖判题系统',
      max_label: '主动分析调试'
    },
    {
      id: 'knowledge_breadth',
      name: '知识广度',
      description: '算法知识的广度和深度',
      min_label: '基础算法',
      max_label: '高阶算法'
    },
    {
      id: 'competition_strategy',
      name: '比赛策略',
      description: '比赛中的时间管理和策略制定',
      min_label: '盲目做题',
      max_label: '策略规划'
    },
    {
      id: 'mental_adjustment',
      name: '心态调整',
      description: '面对压力和困难时的心态调整能力',
      min_label: '紧张焦虑',
      max_label: '从容应对'
    },
    {
      id: 'learning_ability',
      name: '学习能力',
      description: '学习新算法和技术的能力',
      min_label: '被动学习',
      max_label: '主动探索'
    },
    {
      id: 'teamwork',
      name: '团队协作',
      description: '在团队比赛中的协作能力',
      min_label: '个人解题',
      max_label: '团队配合'
    },
    {
      id: 'innovation',
      name: '创新能力',
      description: '创造新算法和思路的能力',
      min_label: '使用现有算法',
      max_label: '创造新算法'
    }
  ],
  questions: [
    {
      id: 'q1',
      text: '遇到一道复杂的算法题，你首先会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '直接查看是否有类似的模板可以套用',
          scores: {
            algorithm_thinking: 1,
            code_implementation: 2,
            knowledge_breadth: 1
          },
          evidence: {
            supports: [{ type: 'template_master', weight: 2 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 1 }]
          }
        },
        {
          id: 'b',
          text: '分析问题的数学本质，尝试抽象出模型',
          scores: {
            algorithm_thinking: 3,
            problem_abstraction: 3,
            innovation: 2
          },
          evidence: {
            supports: [{ type: 'thinking_king', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 1 }]
          }
        },
        {
          id: 'c',
          text: '先写一个暴力解法，然后逐步优化',
          scores: {
            algorithm_thinking: 2,
            debugging_skill: 2,
            code_implementation: 2
          },
          evidence: {
            supports: [{ type: 'code_artist', weight: 2 }],
            conflicts: [{ type: 'thinking_king', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q2',
      text: '比赛中遇到调试困难的问题，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '不断提交代码，依赖判题系统的反馈',
          scores: {
            debugging_skill: 1,
            mental_adjustment: 1,
            competition_strategy: 1
          },
          evidence: {
            supports: [{ type: 'template_master', weight: 1.5 }],
            conflicts: [{ type: 'debugging_expert', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '使用输出调试，逐步定位问题',
          scores: {
            debugging_skill: 2,
            code_implementation: 2,
            mental_adjustment: 2
          },
          evidence: {
            supports: [{ type: 'code_artist', weight: 1.5 }],
            conflicts: [{ type: 'strategy_master', weight: 1 }]
          }
        },
        {
          id: 'c',
          text: '系统性分析，使用二分法定位错误',
          scores: {
            debugging_skill: 3,
            algorithm_thinking: 2,
            mental_adjustment: 3
          },
          evidence: {
            supports: [{ type: 'debugging_expert', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 1.5 }]
          }
        }
      ]
    },
    {
      id: 'q3',
      text: '面对一道完全陌生的算法题，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '尝试搜索类似的问题和解法',
          scores: {
            learning_ability: 2,
            knowledge_breadth: 1,
            innovation: 1
          },
          evidence: {
            supports: [{ type: 'template_master', weight: 1.5 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '分析问题的性质，尝试自己推导解法',
          scores: {
            algorithm_thinking: 3,
            problem_abstraction: 3,
            innovation: 3
          },
          evidence: {
            supports: [{ type: 'innovation_pioneer', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '从简单情况入手，寻找规律',
          scores: {
            algorithm_thinking: 2,
            learning_ability: 3,
            problem_abstraction: 2
          },
          evidence: {
            supports: [{ type: 'algorithm_allrounder', weight: 2 }],
            conflicts: [{ type: 'thinking_king', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q4',
      text: '团队比赛中，你更倾向于：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '独立解决自己擅长的问题',
          scores: {
            teamwork: 1,
            code_implementation: 2,
            knowledge_breadth: 2
          },
          evidence: {
            supports: [{ type: 'code_artist', weight: 1.5 }],
            conflicts: [{ type: 'team_core', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '协调团队分工，制定解题策略',
          scores: {
            teamwork: 3,
            competition_strategy: 3,
            mental_adjustment: 2
          },
          evidence: {
            supports: [{ type: 'team_core', weight: 2 }],
            conflicts: [{ type: 'code_artist', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '根据问题难度和团队成员特长分配任务',
          scores: {
            teamwork: 2,
            competition_strategy: 2,
            knowledge_breadth: 3
          },
          evidence: {
            supports: [{ type: 'strategy_master', weight: 2 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q5',
      text: '比赛时间所剩无几，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '继续尝试解决难题，争取更多分数',
          scores: {
            competition_strategy: 1,
            mental_adjustment: 2,
            algorithm_thinking: 2
          },
          evidence: {
            supports: [{ type: 'thinking_king', weight: 1.5 }],
            conflicts: [{ type: 'strategy_master', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '检查已提交的代码，确保没有低级错误',
          scores: {
            competition_strategy: 2,
            debugging_skill: 2,
            mental_adjustment: 3
          },
          evidence: {
            supports: [{ type: 'debugging_expert', weight: 1.5 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 1 }]
          }
        },
        {
          id: 'c',
          text: '快速解决简单题，最大化得分',
          scores: {
            competition_strategy: 3,
            mental_adjustment: 2,
            code_implementation: 2
          },
          evidence: {
            supports: [{ type: 'strategy_master', weight: 2 }],
            conflicts: [{ type: 'thinking_king', weight: 1.5 }]
          }
        }
      ]
    },
    {
      id: 'q6',
      text: '学习新算法时，你更倾向于：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '直接背模板，然后通过做题熟悉',
          scores: {
            learning_ability: 1,
            code_implementation: 2,
            knowledge_breadth: 1
          },
          evidence: {
            supports: [{ type: 'template_master', weight: 2 }],
            conflicts: [{ type: 'algorithm_allrounder', weight: 1.5 }]
          }
        },
        {
          id: 'b',
          text: '理解算法原理，推导证明过程',
          scores: {
            learning_ability: 3,
            algorithm_thinking: 3,
            knowledge_breadth: 3
          },
          evidence: {
            supports: [{ type: 'algorithm_allrounder', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '通过实际问题应用来学习',
          scores: {
            learning_ability: 2,
            problem_abstraction: 2,
            code_implementation: 3
          },
          evidence: {
            supports: [{ type: 'code_artist', weight: 2 }],
            conflicts: [{ type: 'thinking_king', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q7',
      text: '遇到时间复杂度瓶颈，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '尝试优化常数，卡常通过',
          scores: {
            code_implementation: 3,
            algorithm_thinking: 1,
            innovation: 1
          },
          evidence: {
            supports: [{ type: 'code_artist', weight: 2 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 1.5 }]
          }
        },
        {
          id: 'b',
          text: '重新分析问题，寻找更优的算法',
          scores: {
            algorithm_thinking: 3,
            innovation: 3,
            problem_abstraction: 2
          },
          evidence: {
            supports: [{ type: 'innovation_pioneer', weight: 2 }],
            conflicts: [{ type: 'code_artist', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '查找相关算法，学习并应用',
          scores: {
            learning_ability: 3,
            knowledge_breadth: 3,
            algorithm_thinking: 2
          },
          evidence: {
            supports: [{ type: 'algorithm_allrounder', weight: 2 }],
            conflicts: [{ type: 'code_artist', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q8',
      text: '比赛中连续WA多次，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '继续尝试不同的思路',
          scores: {
            mental_adjustment: 1,
            debugging_skill: 1,
            algorithm_thinking: 2
          },
          evidence: {
            supports: [{ type: 'innovation_pioneer', weight: 1.5 }],
            conflicts: [{ type: 'debugging_expert', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '冷静分析，构造测试用例',
          scores: {
            mental_adjustment: 3,
            debugging_skill: 3,
            problem_abstraction: 2
          },
          evidence: {
            supports: [{ type: 'debugging_expert', weight: 2 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '暂时跳过，先做其他题目',
          scores: {
            mental_adjustment: 2,
            competition_strategy: 3,
            teamwork: 2
          },
          evidence: {
            supports: [{ type: 'strategy_master', weight: 2 }],
            conflicts: [{ type: 'thinking_king', weight: 1.5 }]
          }
        }
      ]
    },
    {
      id: 'q9',
      text: '团队讨论时，你更倾向于：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '提出自己的思路，坚持己见',
          scores: {
            teamwork: 1,
            algorithm_thinking: 2,
            innovation: 2
          },
          evidence: {
            supports: [{ type: 'thinking_king', weight: 1.5 }],
            conflicts: [{ type: 'team_core', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '倾听他人意见，综合分析',
          scores: {
            teamwork: 3,
            mental_adjustment: 2,
            competition_strategy: 2
          },
          evidence: {
            supports: [{ type: 'team_core', weight: 2 }, { type: 'team_core', weight: 1.5 }],
            conflicts: [{ type: 'thinking_king', weight: 1.5 }]
          }
        },
        {
          id: 'c',
          text: '根据问题类型，选择最适合的方案',
          scores: {
            teamwork: 2,
            knowledge_breadth: 3,
            competition_strategy: 3
          },
          evidence: {
            supports: [{ type: 'algorithm_allrounder', weight: 2 }],
            conflicts: [{ type: 'team_core', weight: 1 }]
          }
        }
      ]
    },
    {
      id: 'q10',
      text: '对于算法竞赛的看法，你认为：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '主要靠记忆模板和刷题',
          scores: {
            algorithm_thinking: 1,
            learning_ability: 1,
            innovation: 1
          },
          evidence: {
            supports: [{ type: 'template_master', weight: 2 }],
            conflicts: [{ type: 'innovation_pioneer', weight: 2 }]
          }
        },
        {
          id: 'b',
          text: '关键是思维能力和问题分析',
          scores: {
            algorithm_thinking: 3,
            problem_abstraction: 3,
            innovation: 2
          },
          evidence: {
            supports: [{ type: 'thinking_king', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 2 }]
          }
        },
        {
          id: 'c',
          text: '需要综合能力，包括思维、代码和策略',
          scores: {
            algorithm_thinking: 2,
            code_implementation: 2,
            competition_strategy: 3
          },
          evidence: {
            supports: [{ type: 'algorithm_allrounder', weight: 2 }],
            conflicts: [{ type: 'template_master', weight: 1 }]
          }
        }
      ]
    }
  ],
  personalityTypes: [
    {
      id: 'template_master',
      name: '模板大师',
      description: '你是模板的忠实拥趸，擅长记忆和应用各种算法模板。遇到问题时，你首先会搜索类似的模板，然后根据具体情况进行调整。你的代码实现能力不错，但在遇到需要创造性思维的问题时可能会遇到挑战。',
      meme: '模板在手，天下我有',
      template: {
        algorithm_thinking: 1.5,
        code_implementation: 2.2,
        problem_abstraction: 1.3,
        debugging_skill: 1.8,
        knowledge_breadth: 1.6,
        competition_strategy: 1.7,
        mental_adjustment: 2.0,
        learning_ability: 1.5,
        teamwork: 1.6,
        innovation: 1.2
      },
      constraints: [
        { dimension: 'algorithm_thinking', max: 1.8, hard: true },
        { dimension: 'code_implementation', min: 1.8, weight: 1.1 },
        { dimension: 'innovation', max: 1.5, weight: 1.2 }
      ]
    },
    {
      id: 'thinking_king',
      name: '思维王者',
      description: '你是思维的巨人，擅长抽象思维和问题转化。遇到复杂问题时，你能够迅速抓住问题的本质，抽象出数学模型。你的算法思维深度令人钦佩，但有时可能会在代码实现上花费较多时间。',
      meme: '思维至上，代码次之',
      template: {
        algorithm_thinking: 3.0,
        code_implementation: 1.5,
        problem_abstraction: 3.0,
        debugging_skill: 2.0,
        knowledge_breadth: 2.5,
        competition_strategy: 1.5,
        mental_adjustment: 2.0,
        learning_ability: 3.0,
        teamwork: 1.5,
        innovation: 2.8
      },
      constraints: [
        { dimension: 'algorithm_thinking', min: 2.5, hard: true },
        { dimension: 'problem_abstraction', min: 2.5, hard: true },
        { dimension: 'code_implementation', max: 2.0, weight: 1.1 }
      ]
    },
    {
      id: 'code_artist',
      name: '代码艺术家',
      description: '你是代码的艺术家，擅长将算法转化为高效、优雅的代码。你的代码实现能力极强，能够快速编写复杂的代码。你注重代码的细节和优化，是团队中可靠的代码实现者。',
      meme: '代码即艺术',
      template: {
        algorithm_thinking: 2.0,
        code_implementation: 3.0,
        problem_abstraction: 1.8,
        debugging_skill: 2.5,
        knowledge_breadth: 2.0,
        competition_strategy: 1.8,
        mental_adjustment: 2.2,
        learning_ability: 2.0,
        teamwork: 1.8,
        innovation: 1.8
      },
      constraints: [
        { dimension: 'code_implementation', min: 2.5, hard: true },
        { dimension: 'debugging_skill', min: 2.0, weight: 1.1 },
        { dimension: 'problem_abstraction', max: 2.2, weight: 1.1 }
      ]
    },
    {
      id: 'debugging_expert',
      name: '调试专家',
      description: '你是调试的专家，擅长定位和解决代码中的问题。遇到bug时，你能够系统性地分析，快速定位错误所在。你的心态稳定，即使在压力下也能保持冷静，是团队中的救火队员。',
      meme: 'bug克星',
      template: {
        algorithm_thinking: 1.8,
        code_implementation: 2.2,
        problem_abstraction: 1.7,
        debugging_skill: 3.0,
        knowledge_breadth: 1.9,
        competition_strategy: 2.0,
        mental_adjustment: 3.0,
        learning_ability: 1.8,
        teamwork: 2.0,
        innovation: 1.6
      },
      constraints: [
        { dimension: 'debugging_skill', min: 2.5, hard: true },
        { dimension: 'mental_adjustment', min: 2.5, weight: 1.1 },
        { dimension: 'innovation', max: 2.0, weight: 1.1 }
      ]
    },
    {
      id: 'algorithm_allrounder',
      name: '算法全才',
      description: '你是算法的全才，知识广度和深度兼具。你不仅熟悉各种基础算法，还了解高阶算法的原理和应用。你能够根据问题的特点选择最合适的算法，是团队中的技术核心。',
      meme: '算法百科全书',
      template: {
        algorithm_thinking: 2.5,
        code_implementation: 2.3,
        problem_abstraction: 2.4,
        debugging_skill: 2.2,
        knowledge_breadth: 3.0,
        competition_strategy: 2.3,
        mental_adjustment: 2.4,
        learning_ability: 3.0,
        teamwork: 2.2,
        innovation: 2.2
      },
      constraints: [
        { dimension: 'knowledge_breadth', min: 2.5, hard: true },
        { dimension: 'learning_ability', min: 2.5, hard: true },
        { dimension: 'algorithm_thinking', min: 2.0, weight: 1.1 }
      ]
    },
    {
      id: 'strategy_master',
      name: '策略大师',
      description: '你是比赛的策略大师，擅长制定比赛策略和时间管理。你能够根据题目难度和团队情况，合理分配时间和任务。你的决策能力强，在关键时刻能够做出正确的选择，是团队的指挥官。',
      meme: '策略为王',
      template: {
        algorithm_thinking: 2.0,
        code_implementation: 1.9,
        problem_abstraction: 2.0,
        debugging_skill: 2.0,
        knowledge_breadth: 2.2,
        competition_strategy: 3.0,
        mental_adjustment: 2.8,
        learning_ability: 2.2,
        teamwork: 2.8,
        innovation: 1.8
      },
      constraints: [
        { dimension: 'competition_strategy', min: 2.5, hard: true },
        { dimension: 'teamwork', min: 2.3, weight: 1.1 },
        { dimension: 'mental_adjustment', min: 2.3, weight: 1.1 }
      ]
    },
    {
      id: 'innovation_pioneer',
      name: '创新先锋',
      description: '你是创新的先锋，擅长创造新算法和思路。遇到难题时，你不满足于现有解法，而是尝试寻找更优的解决方案。你的思维灵活，能够从不同角度思考问题，是团队中的创意源泉。',
      meme: '创新无极限',
      template: {
        algorithm_thinking: 3.0,
        code_implementation: 1.9,
        problem_abstraction: 2.8,
        debugging_skill: 1.8,
        knowledge_breadth: 2.3,
        competition_strategy: 1.7,
        mental_adjustment: 2.0,
        learning_ability: 2.9,
        teamwork: 1.6,
        innovation: 3.0
      },
      constraints: [
        { dimension: 'innovation', min: 2.5, hard: true },
        { dimension: 'algorithm_thinking', min: 2.5, hard: true },
        { dimension: 'teamwork', max: 2.0, weight: 1.1 }
      ]
    },
    {
      id: 'team_core',
      name: '团队核心',
      description: '你是团队的核心，擅长团队协作和领导。你能够协调团队成员的工作，充分发挥每个人的优势。你的沟通能力强，能够在团队中建立良好的氛围，是团队的灵魂人物。',
      meme: '团队至上',
      template: {
        algorithm_thinking: 2.0,
        code_implementation: 2.0,
        problem_abstraction: 2.0,
        debugging_skill: 2.0,
        knowledge_breadth: 2.0,
        competition_strategy: 2.5,
        mental_adjustment: 2.8,
        learning_ability: 2.2,
        teamwork: 3.0,
        innovation: 1.8
      },
      constraints: [
        { dimension: 'teamwork', min: 2.5, hard: true },
        { dimension: 'mental_adjustment', min: 2.5, weight: 1.1 },
        { dimension: 'competition_strategy', min: 2.0, weight: 1.1 }
      ]
    }
  ],
  dimensionWeights: {
    algorithm_thinking: 1.2,
    code_implementation: 1.15,
    problem_abstraction: 1.2,
    debugging_skill: 1.1,
    knowledge_breadth: 1.15,
    competition_strategy: 1.1,
    mental_adjustment: 1.05,
    learning_ability: 1.15,
    teamwork: 1.1,
    innovation: 1.2
  },
  acceptanceCases: [
    {
      id: 'case-template-master',
      label: '模板应用者',
      expectedType: 'template_master',
      answers: { q1: 'a', q2: 'a', q3: 'a', q4: 'a', q5: 'a', q6: 'a', q7: 'a', q8: 'a', q9: 'a', q10: 'a' }
    },
    {
      id: 'case-thinking-king',
      label: '思维主导者',
      expectedType: 'thinking_king',
      answers: { q1: 'b', q2: 'c', q3: 'b', q4: 'a', q5: 'a', q6: 'b', q7: 'b', q8: 'b', q9: 'a', q10: 'b' }
    },
    {
      id: 'case-code-artist',
      label: '代码实现者',
      expectedType: 'code_artist',
      answers: { q1: 'c', q2: 'b', q3: 'c', q4: 'a', q5: 'b', q6: 'c', q7: 'a', q8: 'b', q9: 'a', q10: 'c' }
    },
    {
      id: 'case-debugging-expert',
      label: '调试专家',
      expectedType: 'debugging_expert',
      answers: { q1: 'c', q2: 'c', q3: 'c', q4: 'c', q5: 'b', q6: 'c', q7: 'c', q8: 'b', q9: 'c', q10: 'c' }
    },
    {
      id: 'case-algorithm-allrounder',
      label: '算法全才',
      expectedType: 'algorithm_allrounder',
      answers: { q1: 'b', q2: 'c', q3: 'c', q4: 'c', q5: 'c', q6: 'b', q7: 'c', q8: 'c', q9: 'c', q10: 'c' }
    },
    {
      id: 'case-strategy-master',
      label: '策略大师',
      expectedType: 'strategy_master',
      answers: { q1: 'c', q2: 'c', q3: 'c', q4: 'c', q5: 'c', q6: 'c', q7: 'c', q8: 'c', q9: 'b', q10: 'c' }
    },
    {
      id: 'case-innovation-pioneer',
      label: '创新先锋',
      expectedType: 'innovation_pioneer',
      answers: { q1: 'b', q2: 'b', q3: 'b', q4: 'a', q5: 'a', q6: 'b', q7: 'b', q8: 'a', q9: 'a', q10: 'b' }
    },
    {
      id: 'case-team-core',
      label: '团队核心',
      expectedType: 'team_core',
      answers: { q1: 'c', q2: 'c', q3: 'c', q4: 'b', q5: 'c', q6: 'c', q7: 'c', q8: 'c', q9: 'b', q10: 'c' }
    }
  ]
};
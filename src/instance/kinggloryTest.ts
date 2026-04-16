import type { TestConfig } from '../protocol/types';

export const kinggloryTest: TestConfig = {
  id: 'kingglory',
  name: '王者荣耀人格蒸馏测试',
  description: '峡谷玩家人格蒸馏，测测你在王者世界的真实定位',
  dimensions: [
    {
      id: 'teamwork',
      name: '团队协作',
      description: '与团队成员合作的倾向',
      min_label: '独行侠',
      max_label: '团队核心'
    },
    {
      id: 'competitiveness',
      name: '竞争意识',
      description: '追求胜利和排名的强烈程度',
      min_label: '佛系玩家',
      max_label: '争强好胜'
    },
    {
      id: 'strategic',
      name: '战略思维',
      description: '全局规划和策略制定的能力',
      min_label: '随波逐流',
      max_label: '战术大师'
    },
    {
      id: 'adaptability',
      name: '适应能力',
      description: '应对变化和意外情况的能力',
      min_label: '只会一套',
      max_label: '全能选手'
    },
    {
      id: 'aggressiveness',
      name: '攻击性',
      description: '主动出击和冒险的倾向',
      min_label: '和平发育',
      max_label: '暴力输出'
    },
    {
      id: 'toxicity',
      name: '嘴臭程度',
      description: '游戏中的语言攻击倾向',
      min_label: '素质玩家',
      max_label: '祖安选手'
    }
  ],
  questions: [
    {
      id: 'q1',
      text: '队友选了后羿，说"精灵王的花语是手慢无"，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '选小明，牵着后羿射穿三路，大喊"开！"',
          scores: { teamwork: 3, adaptability: 2, toxicity: 1, aggressiveness: 2 }
        },
        {
          id: 'b',
          text: '选钟馗，勾不到人就喷后羿"你就是个移动除草机"',
          scores: { toxicity: 3, teamwork: 1, aggressiveness: 2, competitiveness: 2 }
        },
        {
          id: 'c',
          text: '选守约，跟后羿抢经济，说"有的兄弟有的"',
          scores: { aggressiveness: 3, teamwork: 1, competitiveness: 3, toxicity: 2 }
        }
      ]
    },
    {
      id: 'q2',
      text: '被对面打野抓了三次，你的反应是：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '骂队友"聆听名刀破碎的声音"，然后挂机',
          scores: { toxicity: 3, teamwork: 1, adaptability: 1, aggressiveness: 1 }
        },
        {
          id: 'b',
          text: '猥琐塔下，等队友支援，说"稳住，我们能赢"',
          scores: { teamwork: 3, adaptability: 2, strategic: 2, toxicity: 1 }
        },
        {
          id: 'c',
          text: '反蹲对面打野，找回场子，大喊"血条再厚，一刀带走"',
          scores: { aggressiveness: 3, strategic: 3, competitiveness: 3, toxicity: 1 }
        }
      ]
    },
    {
      id: 'q3',
      text: '队友说"无所谓，我会出手"，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '跟着鼓励队友，积极沟通',
          scores: { teamwork: 3, toxicity: 1, adaptability: 2, strategic: 2 }
        },
        {
          id: 'b',
          text: '回一句"啊对对对"，阴阳怪气',
          scores: { toxicity: 3, teamwork: 1, adaptability: 1, aggressiveness: 1 }
        },
        {
          id: 'c',
          text: '不说话，默默发育，准备Carry',
          scores: { competitiveness: 3, adaptability: 2, strategic: 2, toxicity: 1 }
        }
      ]
    },
    {
      id: 'q4',
      text: '拿到五杀后，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '发"？"嘲讽对面，说"打了个全家桶"',
          scores: { toxicity: 3, aggressiveness: 3, competitiveness: 3, teamwork: 1 }
        },
        {
          id: 'b',
          text: '说"谢谢队友"，谦虚低调',
          scores: { teamwork: 3, toxicity: 1, adaptability: 2, strategic: 2 }
        },
        {
          id: 'c',
          text: '截图发朋友圈，配文"五分钟让你爱上XX"',
          scores: { aggressiveness: 2, competitiveness: 2, adaptability: 2, toxicity: 1 }
        }
      ]
    },
    {
      id: 'q5',
      text: '队友抢了你的蓝buff，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '抢他的红buff报复，说"这波不亏"',
          scores: { aggressiveness: 3, teamwork: 1, competitiveness: 3, toxicity: 2 }
        },
        {
          id: 'b',
          text: '算了，继续游戏，说"稳走"',
          scores: { adaptability: 3, teamwork: 2, strategic: 2, toxicity: 1 }
        },
        {
          id: 'c',
          text: '打字问他为什么抢蓝，说"扣1送地狱火"',
          scores: { toxicity: 2, teamwork: 1, aggressiveness: 1, adaptability: 1 }
        }
      ]
    },
    {
      id: 'q6',
      text: '对面投降，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '拒绝，要虐泉，说"泰国丸美"',
          scores: { aggressiveness: 3, toxicity: 3, competitiveness: 3, teamwork: 1 }
        },
        {
          id: 'b',
          text: '直接同意，赶紧下一把',
          scores: { adaptability: 3, competitiveness: 2, strategic: 2, toxicity: 1 }
        },
        {
          id: 'c',
          text: '看队友意见，民主决策',
          scores: { teamwork: 3, adaptability: 2, strategic: 2, toxicity: 1 }
        }
      ]
    },
    {
      id: 'q7',
      text: '打野不抓人，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '喷打野，说"世界是一个巨大的AG"',
          scores: { toxicity: 3, teamwork: 1, aggressiveness: 2, adaptability: 1 }
        },
        {
          id: 'b',
          text: '自己放线去支援其他路，说"我来Carry"',
          scores: { adaptability: 3, strategic: 3, teamwork: 3, aggressiveness: 2 }
        },
        {
          id: 'c',
          text: '发信号让打野来，说"牢九门集合"',
          scores: { teamwork: 2, adaptability: 2, strategic: 2, toxicity: 1 }
        }
      ]
    },
    {
      id: 'q8',
      text: '玩辅助，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '跟着射手，保护他，说"宝宝 我带的可是净化哦"',
          scores: { teamwork: 3, adaptability: 2, strategic: 2, toxicity: 1 }
        },
        {
          id: 'b',
          text: '到处游走，帮队友，说"拿捏了"',
          scores: { strategic: 3, teamwork: 3, adaptability: 3, aggressiveness: 2 }
        },
        {
          id: 'c',
          text: '抢兵线，自己发育，说"磊哥游戏"',
          scores: { aggressiveness: 3, competitiveness: 3, teamwork: 1, toxicity: 2 }
        }
      ]
    },
    {
      id: 'q9',
      text: '逆风局，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '投降，不想浪费时间，说"心态崩了"',
          scores: { adaptability: 1, competitiveness: 1, teamwork: 1, toxicity: 2 }
        },
        {
          id: 'b',
          text: '鼓励队友，寻找机会，说"梦泪和韩信的对话看哭140亿人"',
          scores: { teamwork: 3, strategic: 3, adaptability: 2, toxicity: 1 }
        },
        {
          id: 'c',
          text: '自己单带，试图偷塔，说"我C，你们躺"',
          scores: { aggressiveness: 2, adaptability: 3, competitiveness: 3, teamwork: 1 }
        }
      ]
    },
    {
      id: 'q10',
      text: '选英雄时，你会：',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: '选版本强势英雄，说"牢九门yyds"',
          scores: { adaptability: 3, strategic: 3, competitiveness: 2, toxicity: 1 }
        },
        {
          id: 'b',
          text: '选自己擅长的英雄，说"国服孙策申请出战"',
          scores: { aggressiveness: 2, competitiveness: 3, adaptability: 1, toxicity: 1 }
        },
        {
          id: 'c',
          text: '补位，选团队需要的英雄，说"团队第一"',
          scores: { teamwork: 3, adaptability: 3, strategic: 2, toxicity: 1 }
        }
      ]
    }
  ],
  personalityTypes: [
    {
      id: 'toxic_king',
      name: '祖安皇帝',
      description: '你是峡谷中的祖安皇帝，一言不合就开喷。队友失误？喷！打野不抓？喷！对面嘲讽？双倍奉还！你的嘴比你的操作还犀利，虽然可能技术不错，但队友看到你就想投降。',
      meme: '我喷故我在',
      template: {
        teamwork: 1.2,
        competitiveness: 2.6,
        strategic: 1.4,
        adaptability: 1.2,
        aggressiveness: 2.4,
        toxicity: 3.0
      }
    },
    {
      id: 'team_player',
      name: '团队核心',
      description: '你是峡谷中的团队核心，注重配合，善于沟通。你知道什么时候该打团，什么时候该发育，什么时候该支援。你的存在让队友感到安心，是真正的团队领袖。',
      meme: '团队第一，个人第二',
      template: {
        teamwork: 3.0,
        competitiveness: 2.0,
        strategic: 2.8,
        adaptability: 2.6,
        aggressiveness: 1.8,
        toxicity: 1.2
      }
    },
    {
      id: 'mechanical_god',
      name: '操作怪',
      description: '你是峡谷中的操作怪，手速快如闪电，技能放得又准又狠。你喜欢玩秀的英雄，享受单杀的快感。虽然有时候可能忽略团队，但你的操作总能给队友带来惊喜。',
      meme: '秀就完事了',
      template: {
        teamwork: 1.4,
        competitiveness: 2.8,
        strategic: 2.0,
        adaptability: 2.2,
        aggressiveness: 3.0,
        toxicity: 1.8
      }
    },
    {
      id: 'strategic_master',
      name: '战术大师',
      description: '你是峡谷中的战术大师，大局观极强，善于制定战略。你知道什么时候该开龙，什么时候该推塔，什么时候该反野。你的指挥让团队总能在关键时刻做出正确的决策。',
      meme: '智商碾压',
      template: {
        teamwork: 2.6,
        competitiveness: 2.4,
        strategic: 3.0,
        adaptability: 2.8,
        aggressiveness: 2.0,
        toxicity: 1.4
      }
    },
    {
      id: 'tryhard',
      name: '分奴',
      description: '你是峡谷中的分奴，为了胜利不择手段。你会认真研究版本，苦练强势英雄，甚至为了赢可以牺牲游戏体验。你的目标只有一个：上分！',
      meme: '赢了会所嫩模，输了下海干活',
      template: {
        teamwork: 2.4,
        competitiveness: 3.0,
        strategic: 2.6,
        adaptability: 2.8,
        aggressiveness: 2.6,
        toxicity: 1.6
      }
    },
    {
      id: 'solo_carry',
      name: 'Solo Carry',
      description: '你是峡谷中的Solo Carry，喜欢自己发育，然后接管比赛。你相信自己的实力，不需要队友也能Carry。你的存在让队友感到放心，因为他们知道你能C。',
      meme: '我C，你们躺',
      template: {
        teamwork: 1.2,
        competitiveness: 3.0,
        strategic: 2.2,
        adaptability: 2.0,
        aggressiveness: 3.0,
        toxicity: 1.8
      }
    },
    {
      id: 'absurd_master',
      name: '抽象大师',
      description: '你是峡谷中的抽象大师，满嘴梗，行为古怪。你喜欢玩一些奇怪的套路，说一些让人摸不着头脑的话。你的存在让游戏变得充满乐趣，是队友的快乐源泉。',
      meme: '啊对对对',
      template: {
        teamwork: 1.6,
        competitiveness: 1.8,
        strategic: 1.6,
        adaptability: 2.0,
        aggressiveness: 1.8,
        toxicity: 2.2
      }
    },
    {
      id: 'flex_king',
      name: '装X之王',
      description: '你是峡谷中的装X之王，走到哪里都要秀一下。拿到人头要发信号，拿到五杀要截图，甚至死亡也要摆个帅气的姿势。你的存在让峡谷充满了戏剧性，是队友的话题中心。',
      meme: '无所谓，我会出手',
      template: {
        teamwork: 1.4,
        competitiveness: 2.6,
        strategic: 1.8,
        adaptability: 1.8,
        aggressiveness: 2.8,
        toxicity: 2.0
      }
    }
  ]
};
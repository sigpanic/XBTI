import type { TestConfig } from '../protocol/types';

export const kinggloryTest: TestConfig = {
  id: 'kingglory',
  name: '王者荣耀人格蒸馏测试',
  description: '峡谷玩家人格蒸馏，测测你在王者世界的真实定位',
  dimensions: [
    { id: 'teamwork', name: '团队协作', description: '与团队成员配合的倾向', min_label: '各玩各的', max_label: '团队润滑剂' },
    { id: 'resilience', name: '逆风韧性', description: '逆风局的心态和行为', min_label: '秒点投降', max_label: '永不放弃' },
    { id: 'elo_attitude', name: 'ELO态度', description: '对匹配机制的看法', min_label: '理性看待', max_label: '受害者心态' },
    { id: 'hero_flexibility', name: '英雄态度', description: '英雄选择和使用习惯', min_label: '绝活哥', max_label: '版本答案' },
    { id: 'chat_behavior', name: '游戏语言', description: '局内聊天行为', min_label: '素质玩家', max_label: '祖安选手' },
    { id: 'competitive_motivation', name: '竞技动机', description: '打游戏的核心驱动力', min_label: '纯娱乐', max_label: '分奴' },
    { id: 'mechanism_exploit', name: '机制利用', description: '对游戏机制的态度', min_label: '老实玩家', max_label: '算法黑客' },
    { id: 'blame_tendency', name: '甩锅倾向', description: '逆风时的归因方式', min_label: '反躬自省', max_label: '泉水指挥官' },
    { id: 'skill_pursuit', name: '操作态度', description: '对技术的追求程度', min_label: '随意玩玩', max_label: '操作怪' },
  ],
  questions: [
    {
      id: 'q1',
      text: '排位匹配30秒秒进，你第一反应是：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"希望能赢"', scores: { competitive_motivation: 3, resilience: 2, teamwork: 2, skill_pursuit: 2 } },
        { id: 'b', text: '"又是系统安排的局"', scores: { elo_attitude: 3, blame_tendency: 2, resilience: 1 } },
        { id: 'c', text: '"无所谓"', scores: { competitive_motivation: 1, resilience: 1, teamwork: 1, skill_pursuit: 1 } }
      ]
    },
    {
      id: 'q2',
      text: '队友开局0-3说"我的我的"，你会：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"没事稳住"', scores: { teamwork: 3, resilience: 3, blame_tendency: 1 } },
        { id: 'b', text: '"点了吧"', scores: { resilience: 1, chat_behavior: 2, teamwork: 1 } },
        { id: 'c', text: '默默不说话', scores: { teamwork: 1, blame_tendency: 2, resilience: 2 } }
      ]
    },
    {
      id: 'q3',
      text: '连跪五把后朋友叫你双排，你会：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"来！我C你"', scores: { competitive_motivation: 3, resilience: 3, skill_pursuit: 3 } },
        { id: 'b', text: '"别排了，匹配机制有问题"', scores: { elo_attitude: 3, blame_tendency: 3, resilience: 1 } },
        { id: 'c', text: '"换个娱乐模式吧"', scores: { elo_attitude: 1, resilience: 2, competitive_motivation: 1, teamwork: 2 } }
      ]
    },
    {
      id: 'q4',
      text: '队友在群里分享"鸡爪流上分攻略"，你：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"学到了，这就去试试"', scores: { mechanism_exploit: 3, competitive_motivation: 3, resilience: 1 } },
        { id: 'b', text: '"这不就是摆烂吗"', scores: { mechanism_exploit: 1, skill_pursuit: 2, resilience: 2, competitive_motivation: 2 } },
        { id: 'c', text: '"早就用了"', scores: { mechanism_exploit: 3, elo_attitude: 3, competitive_motivation: 2 } }
      ]
    },
    {
      id: 'q5',
      text: '选人阶段，你会：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '看阵容补位', scores: { teamwork: 3, hero_flexibility: 3, skill_pursuit: 2 } },
        { id: 'b', text: '秒锁自己的绝活', scores: { hero_flexibility: 1, skill_pursuit: 3, teamwork: 1 } },
        { id: 'c', text: '选版本T0', scores: { hero_flexibility: 3, competitive_motivation: 3 } }
      ]
    },
    {
      id: 'q6',
      text: '逆风局经济差8000队友在吵架，你会：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"别吵了，守住"', scores: { resilience: 3, teamwork: 3, blame_tendency: 1 } },
        { id: 'b', text: '"点了点了"', scores: { resilience: 1, chat_behavior: 1, teamwork: 1 } },
        { id: 'c', text: '"打野0-5有什么用"加入对喷', scores: { chat_behavior: 3, blame_tendency: 3, teamwork: 1 } }
      ]
    },
    {
      id: 'q7',
      text: '你打野失败被杀队友发"？"，你会：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"我的我的"', scores: { blame_tendency: 1, teamwork: 3, chat_behavior: 1 } },
        { id: 'b', text: '"你上路不压线"', scores: { blame_tendency: 3, chat_behavior: 3, teamwork: 1 } },
        { id: 'c', text: '不说话继续刷野', scores: { blame_tendency: 2, teamwork: 1, resilience: 2 } }
      ]
    },
    {
      id: 'q8',
      text: '你排位最常用的上分方式是：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '单排靠实力', scores: { skill_pursuit: 3, competitive_motivation: 3, resilience: 2 } },
        { id: 'b', text: '找大腿带飞', scores: { teamwork: 3, competitive_motivation: 2 } },
        { id: 'c', text: '控评分躺赢', scores: { mechanism_exploit: 3, competitive_motivation: 3, teamwork: 1, resilience: 1 } }
      ]
    },
    {
      id: 'q9',
      text: '你在游戏里的口头禅是：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"稳住，能打"', scores: { teamwork: 3, resilience: 2, blame_tendency: 1 } },
        { id: 'b', text: '"？？？会不会玩"', scores: { chat_behavior: 3, blame_tendency: 3, teamwork: 1 } },
        { id: 'c', text: '"点了，无所谓"', scores: { resilience: 1, competitive_motivation: 1, chat_behavior: 1, teamwork: 1 } }
      ]
    },
    {
      id: 'q10',
      text: '你觉得"能者多劳"在峡谷的意思是：',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '能者多牢——越会玩越被安排', scores: { elo_attitude: 3, blame_tendency: 2, resilience: 1 } },
        { id: 'b', text: '实力强就该多carry', scores: { skill_pursuit: 3, competitive_motivation: 3, teamwork: 1 } },
        { id: 'c', text: '利用机制混分才聪明', scores: { mechanism_exploit: 3, competitive_motivation: 3, teamwork: 1, skill_pursuit: 1 } }
      ]
    },
  ],
  personalityTypes: [
    {
      id: 'prisoner',
      name: '牢玩家',
      description: '"能者多劳？不，能者多牢。"你就是那个被ELO系统安排到无法自拔的赛博囚徒。连跪十把还在点"开始匹配"，每天在峡谷坐牢是日常。你坚信系统在操控一切，但就是停不下来——因为下一把一定能赢。',
      meme: '能者多牢，牢到王者',
      template: { teamwork: 1.5, resilience: 1.0, elo_attitude: 3.0, hero_flexibility: 2.0, chat_behavior: 1.5, competitive_motivation: 2.0, mechanism_exploit: 1.0, blame_tendency: 3.0, skill_pursuit: 2.0 }
    },
    {
      id: 'unearned',
      name: '不牢而获',
      description: '"评分越低，胜率越高。"你是鸡爪流和功德流的忠实粉丝，深谙峡谷算法的精髓。两牢打一牢，完美利用ELO匹配机制的漏洞躺赢上分。别人靠实力，你靠算法——这才是真正的峡谷生存之道。',
      meme: '我送故我赢',
      template: { teamwork: 1.0, resilience: 1.0, elo_attitude: 2.0, hero_flexibility: 2.0, chat_behavior: 1.0, competitive_motivation: 3.0, mechanism_exploit: 3.0, blame_tendency: 1.0, skill_pursuit: 1.0 }
    },
    {
      id: 'ai_bot',
      name: '入机',
      description: '"这操作，连人机都不如。"你的游戏表现已经超越了人类的下限，AI看了都自愧不如。走位接技能、闪现撞墙、大招空大——你是峡谷里行走的快乐源泉，对面的提款机，队友的心理阴影。',
      meme: '人机看了都摇头',
      template: { teamwork: 1.5, resilience: 1.5, elo_attitude: 1.5, hero_flexibility: 1.5, chat_behavior: 1.0, competitive_motivation: 1.0, mechanism_exploit: 1.0, blame_tendency: 1.5, skill_pursuit: 1.0 }
    },
    {
      id: 'surrender',
      name: '右上角福袋',
      description: '"投了投了，下一把。"你的手指永远悬在右上角的投降按钮上。经济差2000就开始点投降，队友不同意就狂发信号。你是峡谷里最悲观的存在，逆风局的投降倒计时就是你的人生倒计时。',
      meme: '投降是一种生活态度',
      template: { teamwork: 1.0, resilience: 1.0, elo_attitude: 1.5, hero_flexibility: 1.5, chat_behavior: 2.5, competitive_motivation: 1.0, mechanism_exploit: 1.0, blame_tendency: 1.0, skill_pursuit: 1.0 }
    },
    {
      id: 'one_trick',
      name: '绝活哥',
      description: '"不管什么版本，我的XX就是最强的。"你只有一个英雄池——一个格子。不管阵容搭配、不管版本强势、不管队友需要什么，你的英雄选择从来只有一个。选到想玩的已经赢了，其他都是天意。',
      meme: '一个英雄走天下',
      template: { teamwork: 1.0, resilience: 2.0, elo_attitude: 1.5, hero_flexibility: 1.0, chat_behavior: 1.0, competitive_motivation: 1.5, mechanism_exploit: 1.0, blame_tendency: 1.5, skill_pursuit: 3.0 }
    },
    {
      id: 'smurf_addict',
      name: '炸鱼成瘾者',
      description: '"虐菜的快感，是排位给不了的。"你沉迷于在新手鱼塘里大杀四方，开小号炸鱼已经成了你的日常。然而长期炸鱼的代价是——你的真实水平已经融入鱼塘，再也打不上去了。',
      meme: '鱼塘霸主',
      template: { teamwork: 1.5, resilience: 2.0, elo_attitude: 1.0, hero_flexibility: 2.0, chat_behavior: 1.0, competitive_motivation: 2.5, mechanism_exploit: 1.0, blame_tendency: 2.0, skill_pursuit: 3.0 }
    },
    {
      id: 'rotten_immortal',
      name: '摆烂仙人',
      description: '"中立""那咋啦""无所谓。"你是峡谷里最佛系的存在，逆风局直接切换成峡谷观光模式。队友吵架你发"哈哈哈"，对面推高地你发"挺好的"。你的心态好到让所有人都怀疑你是不是来度假的。',
      meme: '峡谷观光团VIP会员',
      template: { teamwork: 2.0, resilience: 1.5, elo_attitude: 1.0, hero_flexibility: 2.0, chat_behavior: 1.0, competitive_motivation: 1.0, mechanism_exploit: 1.0, blame_tendency: 1.0, skill_pursuit: 1.0 }
    },
    {
      id: 'skin_warrior',
      name: 'V10皮肤战神',
      description: '"皮肤越贵，实力越菜。"你的收藏柜里全是限定皮肤、典藏皮肤、荣耀水晶，但你的段位和你的氪金程度成反比。加载界面的皮肤展示是你最骄傲的时刻——虽然接下来就是被对面按在地上摩擦。',
      meme: '皮肤是实力的减分项',
      template: { teamwork: 1.5, resilience: 1.5, elo_attitude: 2.0, hero_flexibility: 1.5, chat_behavior: 2.0, competitive_motivation: 1.5, mechanism_exploit: 1.0, blame_tendency: 2.5, skill_pursuit: 1.0 }
    },
    {
      id: 'rank_slave',
      name: '分奴之王',
      description: '"版本T0就是信仰。"为了上分你可以不择手段：研究每一个版本更新公告、苦练每一个强势英雄、分析每一场比赛的MVP出装。你的游戏没有乐趣，只有任务。上分，就是你唯一的信仰。',
      meme: '赢了就是一切',
      template: { teamwork: 1.5, resilience: 2.0, elo_attitude: 1.0, hero_flexibility: 3.0, chat_behavior: 1.0, competitive_motivation: 3.0, mechanism_exploit: 1.5, blame_tendency: 1.5, skill_pursuit: 2.5 }
    },
  ],
  dimensionWeights: {
    competitive_motivation: 1.3,
    resilience: 1.2,
    mechanism_exploit: 1.2,
    skill_pursuit: 1.1,
    blame_tendency: 1.1,
    elo_attitude: 1.0,
    hero_flexibility: 1.0,
    chat_behavior: 0.9,
    teamwork: 0.9
  },
  maxScorePerDimension: 15
};

<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">XBTI</h1>
      <p class="subtitle">人格蒸馏系统</p>
      <p class="tagline">程序员测试只是个开始 — 想蒸馏什么，就蒸馏什么</p>
    </div>

    <div class="theme-selector">
      <h3>选择蒸馏主题</h3>
      <div class="themes">
        <div 
          v-for="theme in allThemes" 
          :key="theme.id"
          class="theme-card" 
          @click="startTestWithTheme(theme.id)"
        >
          <div class="theme-icon" :class="theme.id === 'programmer' ? 'programmer-icon' : 'kingglory-icon'">{{ theme.id === 'programmer' ? '💻' : '🎮' }}</div>
          <div class="theme-name">{{ theme.name }}</div>
          <div class="theme-desc">{{ theme.description }}</div>
          <button class="theme-start-btn">开始蒸馏</button>
        </div>
        <div 
          class="theme-card" 
          @click="showSoon()"
        >
          <div class="theme-icon">🚧</div>
          <div class="theme-name">更多主题</div>
          <div class="theme-desc">正在开发中...</div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="feature">
        <div class="feature-icon">🎭</div>
        <h3>任意主题</h3>
        <p>从程序员到铲屎官，从社恐到社牛，只要你想，都能蒸馏</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🧪</div>
        <h3>精准蒸馏</h3>
        <p>基于向量空间的高级算法，确保蒸馏出最纯粹的人格</p>
      </div>
      <div class="feature">
        <div class="feature-icon">📊</div>
        <h3>科学分析</h3>
        <p>多维度分析，让你更了解自己的人格构成</p>
      </div>
      <div class="feature">
        <div class="feature-icon">📱</div>
        <h3>随时随地</h3>
        <p>电脑手机都支持，想在哪蒸馏就在哪蒸馏</p>
      </div>
    </div>

    <div class="about">
      <h2>关于蒸馏</h2>
      <p>本系统基于XBTI（eXtremely Bullshit Test Inventory）概念，由一群闲得蛋疼的程序员开发。</p>
      <p>通过一系列精心设计的问题，我们将你的人格进行蒸馏，提取出最本质的特征。</p>
      <p>结果仅供娱乐，如果你当真了，那说明你确实需要这个蒸馏过程来认清自己。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTestStore } from '../stores/testStore';

const router = useRouter();
const testStore = useTestStore();

const allThemes = computed(() => testStore.allThemes);

onMounted(() => {
  console.log('All themes:', allThemes.value);
});

const startTestWithTheme = (themeId: string) => {
  console.log('Starting test with theme:', themeId);
  testStore.setTheme(themeId);
  testStore.startTest();
  router.push('/test');
};

const showSoon = () => {
  alert('更多主题正在开发中...敬请期待（或者别期待）');
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
}

.title {
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #2c3e50;
  letter-spacing: -0.05em;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3498db;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.tagline {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #7f8c8d;
  font-style: italic;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  margin-top: 3rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #3498db;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #3498db;
}

.feature h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.feature p {
  color: #7f8c8d;
  line-height: 1.6;
  font-size: 0.95rem;
}

.about {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  border: 1px solid #e9ecef;
}

.about h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.3rem;
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #555;
  font-size: 0.95rem;
}

.theme-selector {
  margin-bottom: 2rem;
}

.theme-selector h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.3rem;
}

.themes {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.theme-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #e9ecef;
  text-align: center;
  min-width: 280px;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.theme-card:hover {
  border-color: #3498db;
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(52, 152, 219, 0.2);
}

.theme-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #3498db;
  transition: all 0.3s ease;
}

.theme-card:hover .theme-icon {
  transform: scale(1.1);
}

.programmer-icon {
  color: #41b883; /* Vue green */
}

.kingglory-icon {
  color: #e74c3c; /* Red for King Glory */
}

.theme-name {
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.theme-desc {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.theme-start-btn {
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.theme-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
  background: linear-gradient(135deg, #2980b9, #1a252f);
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .themes {
    flex-direction: column;
    align-items: center;
  }

  .theme-card {
    min-width: 100%;
    max-width: 100%;
  }
}
</style>

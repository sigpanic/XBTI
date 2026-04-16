<template>
  <div class="result">
    <div v-if="result" class="result-container">
      <h2 class="result-title">人格蒸馏结果</h2>
      
      <div class="personality-card">
        <h3 class="personality-name">{{ getPersonalityName(result.personality_type) }}</h3>
        <p class="personality-meme">{{ getPersonalityMeme(result.personality_type) }}</p>
        <div class="match-percentage">
          <div class="percentage-circle">
            <svg class="circle-svg" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
                </linearGradient>
              </defs>
              <circle class="circle-bg" cx="50" cy="50" r="45"></circle>
              <circle 
                class="circle-progress" 
                cx="50" 
                cy="50" 
                r="45"
                :style="{ strokeDashoffset: strokeDashoffset }"
              ></circle>
            </svg>
            <div class="percentage-text">
              <span class="number">{{ result.match_percentage }}</span>
              <span class="symbol">%</span>
            </div>
          </div>
          <p class="match-label">纯度</p>
        </div>
      </div>

      <div class="radar-chart">
        <h3 class="section-title">维度分析</h3>
        <div ref="radarChartRef" class="chart-container"></div>
      </div>

      <div class="interpretation">
        <h3 class="section-title">详细解读</h3>
        <div class="interpretation-content">
          <p>{{ result.interpretation }}</p>
        </div>
      </div>

      <div class="buttons">
        <button class="restart-btn" @click="restartTest">
          <span class="btn-text">重新蒸馏</span>
        </button>
        <button class="share-btn" @click="shareResult">
          <span class="btn-text">分享结果</span>
        </button>
      </div>
    </div>

    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTestStore } from '../stores/testStore';
import * as echarts from 'echarts';

const router = useRouter();
const testStore = useTestStore();
const radarChartRef = ref<HTMLElement | null>(null);
let radarChart: echarts.ECharts | null = null;

const result = computed(() => testStore.result);

const circumference = 2 * Math.PI * 45;
const strokeDashoffset = computed(() => {
  const percentage = result.value?.match_percentage || 0;
  return circumference - (percentage / 100) * circumference;
});

const getPersonalityName = (personalityId: string) => {
  const theme = testStore.currentTheme;
  if (!theme) return '未知人格';
  const personality = theme.personalityTypes.find(p => p.id === personalityId);
  return personality ? personality.name : '未知人格';
};

const getPersonalityMeme = (personalityId: string) => {
  const theme = testStore.currentTheme;
  if (!theme) return '';
  const personality = theme.personalityTypes.find(p => p.id === personalityId);
  return personality ? personality.meme : '';
};

const restartTest = () => {
  testStore.resetTest();
  router.push('/');
};

const shareResult = () => {
  if (navigator.share) {
    navigator.share({
      title: 'XBTI人格蒸馏结果',
      text: `我是${getPersonalityName(result.value?.personality_type || '')}，纯度${result.value?.match_percentage}%。快来蒸馏你的人格吧！`,
      url: window.location.origin
    });
  } else {
    const text = `我是${getPersonalityName(result.value?.personality_type || '')}，纯度${result.value?.match_percentage}%。快来蒸馏你的人格吧！${window.location.origin}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板');
    });
  }
};

const initRadarChart = () => {
  if (!radarChartRef.value || !result.value) return;

  radarChart = echarts.init(radarChartRef.value);

  const theme = testStore.currentTheme;
  if (!theme) return;

  const dimensions = theme.dimensions;
  const indicator = dimensions.map(dim => ({
    name: dim.name,
    max: 3
  }));

  const seriesData = dimensions.map(dim => {
    return result.value?.dimensions[dim.id] || 1;
  });

  const option = {
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#3498db',
      textStyle: {
        color: '#333'
      }
    },
    radar: {
      indicator: indicator,
      shape: 'polygon',
      splitNumber: 3,
      axisName: {
        color: '#2c3e50',
        fontSize: 12
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            'rgba(52, 152, 219, 0.05)',
            'rgba(44, 62, 80, 0.05)',
            'rgba(127, 140, 141, 0.05)'
          ]
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    series: [
      {
        name: '人格维度',
        type: 'radar',
        data: [
          {
            value: seriesData,
            name: '你的得分',
            areaStyle: {
              color: 'rgba(52, 152, 219, 0.3)'
            },
            lineStyle: {
              color: '#3498db',
              width: 2
            },
            itemStyle: {
              color: '#3498db'
            }
          }
        ]
      }
    ]
  };

  radarChart.setOption(option);

  window.addEventListener('resize', () => {
    radarChart?.resize();
  });
};

onMounted(() => {
  if (!testStore.isTestCompleted) {
    router.push('/');
  } else {
    initRadarChart();
  }
});

watch(result, () => {
  if (result.value) {
    initRadarChart();
  }
});
</script>

<style scoped>
.result {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.result-container {
  max-width: 1000px;
  margin: 0 auto;
}

.result-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.05em;
}

.personality-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 3rem;
  border: 1px solid #e9ecef;
}

.personality-name {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.personality-meme {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  font-style: italic;
  color: #7f8c8d;
}

.match-percentage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.percentage-circle {
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
}

.circle-svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #e9ecef;
  stroke-width: 8;
}

.circle-progress {
  fill: none;
  stroke: url(#gradient);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1);
}

.percentage-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3498db;
}

.symbol {
  font-size: 1.5rem;
  color: #7f8c8d;
}

.match-label {
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 600;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.radar-chart {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  border: 1px solid #e9ecef;
}

.chart-container {
  width: 100%;
  height: 450px;
}

.interpretation {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  border: 1px solid #e9ecef;
}

.interpretation-content {
  line-height: 1.8;
  font-size: 1rem;
  color: #555;
}

.interpretation-content p {
  margin: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.restart-btn,
.share-btn {
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.restart-btn:hover,
.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  gap: 1.5rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #e9ecef;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: #7f8c8d;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .result {
    padding: 1rem;
  }

  .result-title {
    font-size: 1.5rem;
  }

  .personality-card {
    padding: 1.5rem;
  }

  .personality-name {
    font-size: 1.5rem;
  }

  .percentage-circle {
    width: 120px;
    height: 120px;
  }

  .number {
    font-size: 2rem;
  }

  .chart-container {
    height: 350px;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .restart-btn,
  .share-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

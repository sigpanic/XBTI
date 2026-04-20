import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { themeManager } from './xbti/themeManager'

// 自动扫描并注册所有测试实例
const themeModules = import.meta.glob('./instance/*.ts', { eager: true })

for (const path in themeModules) {
  const module = themeModules[path]
  for (const key in module) {
    const testConfig = module[key]
    if (testConfig && testConfig.id && testConfig.name && testConfig.questions) {
      themeManager.registerTheme(testConfig)
    }
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

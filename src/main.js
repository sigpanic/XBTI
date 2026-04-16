import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { themeManager } from './xbti/themeManager'
import { programmerTest } from './instance/programmerTest'
import { kinggloryTest } from './instance/kinggloryTest'

themeManager.registerTheme(programmerTest)
themeManager.registerTheme(kinggloryTest)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

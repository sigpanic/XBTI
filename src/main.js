import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { themeManager } from './xbti/themeManager'
import { programmerTest } from './instance/programmerTest'
import { kinggloryTest } from './instance/kinggloryTest'
import { algorithmCompetitionTest } from './instance/algorithmCompetitionTest'

themeManager.registerTheme(programmerTest)
themeManager.registerTheme(kinggloryTest)
themeManager.registerTheme(algorithmCompetitionTest)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

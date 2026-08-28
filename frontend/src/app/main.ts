import { vReveal } from '@shared/directives/reveal'
import { createApp } from 'vue'

import App from './App.vue'
import { pinia } from './plugins/pinia'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(vuetify)
app.use(router)

app.directive('reveal', vReveal)

app.mount('#app')

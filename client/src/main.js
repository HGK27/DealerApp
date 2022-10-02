import { createApp } from 'vue'
import store from './store.js'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

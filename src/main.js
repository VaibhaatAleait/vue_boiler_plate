import { createApp } from 'vue'
import './assets/tailwind.css'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(createPinia()) // ✅ Pinia here
app.use(router)
app.mount('#app')

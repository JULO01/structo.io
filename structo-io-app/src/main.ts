import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

const app = createApp(App)

app.use(Vuesax)

app.mount('#app')

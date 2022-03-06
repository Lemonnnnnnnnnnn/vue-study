import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import ClassCP from './components/ClassCP.vue'

const app = createApp(App)
app.component('my-class-component' , ClassCP)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

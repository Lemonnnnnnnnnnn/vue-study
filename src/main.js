import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import ClassCP from './components/ClassCP.vue'
import Circle from './components/Circle.vue'

const app = createApp(App)
app.component('my-class-component' , ClassCP)
app.component('my-circle' , Circle)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

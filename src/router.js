import PropsDemo from './pages/propsDemo.vue'
import SlotDemo from './pages/SlotDemo.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('./App.vue'),
    },
    {
        path: '/HelloWorld',
        name: '你好，世界',
        component: () => import('./pages/HelloWorld.vue'),
    },
    {
        path: '/PropsDemo',
        component: PropsDemo,
        name: 'Vue3-props用法'
    },
    {
        path: '/SlotDemo',
        component: SlotDemo,
        name: 'Vue3-Slot用法'
    },
    {
        path : '/ClassDemo',
        component : ()=>import('./pages/ClassDemo.vue'),
        name : 'Vue-class动态绑定'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
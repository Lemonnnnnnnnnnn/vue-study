import SlotDemo from './pages/SlotDemo.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('./App.vue'),
    },
    {
        path: '/PropsDemo',
        component: ()=>import('./pages/PropsDemo/Father.vue'),
        name: 'Vue2和Vue3的props用法'
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
    },
    {
        path : '/EmitDemo',
        component : ()=>import('./pages/EmitDemo/Father.vue'),
        name : 'emit用法'
    },
    {
        path : '/WatchDemo',
        component : ()=>import('./pages/WatchDemo.vue'),
        name : 'watch用法'
    },
    {
        path : '/NextTickDemo',
        component : ()=>import('./pages/NextTickDemo.vue'),
        name : 'nextTick用法'
    },
    {
        path : '/ComponentDemo',
        component : ()=>import('./pages/Component/index.vue'),
        name : 'Component用法'
    },
    {
        path : '/ReactiveRefDemo',
        component :  ()=>import('./pages/ReactiveRefDemo/index.vue'),
        name : 'ReactiveRef用法'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
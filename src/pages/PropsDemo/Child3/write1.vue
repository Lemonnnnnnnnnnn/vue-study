<template>
    <div>{{ my_title }}</div>
    <div>{{ my_ref_title }}</div>
    <button @click="changeTitle">change title</button>
    <button @click="changeRefTitle">change ref title</button>
</template>
<script>
import { onMounted, ref, toRefs } from 'vue'

export default {
    props: { // 必须要注册后在setup中才能接收到
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        changeTitle() {
            console.log('执行方法1')
            this.my_title = 'new title' // 因为my_title不是一个响应式数据 所以这里的修改没有作用
        },
        changeRefTitle() {
            console.log('执行方法2')
            this.my_ref_title = 'new title'
        },
    },
    // 在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
    setup(props ) {
        /**
        * ref 接收参数并将其包裹在一个带有 value property 的对象中返回 
        * console.log(title) ---> { value: '' }
        * console.log(title.value) ---> ''
        * 
        * 将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的：
        * 使用了双向绑定的思想
        */
        // const my_ref_title = ref(props.title)  //  my_ref_title 和 props.title 和 my_title现在指向同一个对象

        /**
         * 因为 props 是响应式的，你不能使用 ES6 解构，它会消除 prop 的响应性。
         * 如果需要解构 prop，可以在 setup 函数中使用 toRefs 函数来完成此操作：
         */
        const { title: my_ref_title } = toRefs(props)

        return {
            my_title: props.title,
            my_ref_title
        }

    }
}
</script>
<template>
    <div @click="log">{{ msg }}</div>
    <Bar />
    <Foo />
    <component :is="showBar ? Bar : Foo" />
</template>
<script setup>

// 里面的代码会被编译成组件 setup() 函数的内容。这意味着与普通的 <script> 只在组件被首次引入的时候执行一次不同，<script setup> 中的代码会在每次组件实例被创建的时候执行。
// 当使用 <script setup> 的时候，任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用：
// 变量
const msg = 'Hello!'
const showBar = false

// 函数
function log() {
    console.log(msg)
}
</script>
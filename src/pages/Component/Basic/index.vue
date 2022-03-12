<template>
    <Bar />
    <Foo />
    <component v-my-directive :is="showBar ? Bar : Foo" />
</template>
<script setup>
import Bar from './bar.vue'
import Foo from './foo.vue'
const showBar = false
const vMyDirective = {
    beforeMount : (el)=>{ // 自定义属性  必须以 vNameOfDirective 的形式来命名本地自定义指令，以使得它们可以直接在模板中使用。
        console.log(el)
    }
}

</script>
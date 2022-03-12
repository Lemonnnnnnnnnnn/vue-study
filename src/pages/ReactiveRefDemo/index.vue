<template>
    <div>
        参考链接：
        <a href="https://v3.cn.vuejs.org/api/basic-reactivity.html">响应性基础 API</a>
        <a
            href="https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#%E5%A3%B0%E6%98%8E%E5%93%8D%E5%BA%94%E5%BC%8F%E7%8A%B6%E6%80%81"
        >响应性基础</a>
        <!-- <define-expose-vue :ref="DefineExposeVueRef" / -->
        <define-expose ref="DefineExposeVueRef" />
        <torefsVue />
        <div>
            <button @click="func">getProperty</button>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import DefineExpose from './DefineExpose.vue'
import torefsVue from './torefs.vue';


const DefineExposeVueRef = ref()
const func = () => {
    console.log(DefineExposeVueRef.value.a);
}

</script>
<style></style>
<template>
    <div>{{ obj.name }}</div>
    <div>源对象年龄：{{ obj.age }}</div>
    <div>ref年龄：{{ refAge }}</div>
    <div>toref年龄：{{ refAge2 }}</div>
    <button @click="obj.age++">修改原对象(视图不更新)</button>
    <button @click="refAge++">修改ref对象（源对象不更新，ref对象更新，视图更新）</button>
    <button @click="refAge2++">修改toRef对象(视图不更新)</button>
</template> 

<script setup lang="ts">
import { reactive, toRefs, ref, toRef } from 'vue'

function useFeatureX() {
    const state = reactive({
        foo: 1,
        bar: 2
    })
    // 操作 state 的逻辑

    // 返回时转换为ref
    return toRefs(state)
}

let obj = { name: "张三", age: 22 }
let refAge = ref(obj.age)
let refAge2 = toRef(obj , 'age') // toref是引用

//toRefs 为了解构
const { foo, bar } = useFeatureX()

</script>

<style scoped>
</style>
<script lang="ts" setup>
interface Props {
    msg?: string,
    obj?: { a: number },
    num?: number,
}

// const props = defineProps({
//   foo: String
// })

// const props1 = defineProps<{
//     child ?:  String,
// }>();

// 用一个函数接收props，并设置默认值，返回一个响应对象
const myprops = withDefaults(defineProps<Props>(), {
    msg: "heeelo",
    obj: () => { return { a: 100 } }
})

</script>
<template>
    <div></div>
    <div>{{ myprops.obj.a }}</div>
    <div v-if="myprops.num">{{ myprops.num }}</div>
    <button >{{ myprops.msg }}</button>
</template>

<style>

</style>
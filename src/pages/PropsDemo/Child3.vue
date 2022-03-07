<script lang="ts" setup>
interface Props {
    msg?: string,
    obj?: { a: number },
    num?: number,
    method?: any
}

// const props1 = defineProps<{
//     child ?:  String,
// }>();

const myprops = withDefaults(defineProps<Props>(), {
    msg: "heeelo",
    obj: () => { return { a: 100 } }
})

</script>
<template>
    <div></div>
    <div>{{ myprops.obj.a }}</div>
    <div v-if="myprops.num">{{ myprops.num }}</div>
    <button @click="myprops.method('测试2')">{{ myprops.msg }}</button>
</template>

<style>

</style>
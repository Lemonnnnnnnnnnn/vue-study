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

const props = withDefaults(defineProps<Props>(), {
    msg: "heeelo",
    obj: () => { return { a: 100 } }
})


</script>
<template>
    <div></div>
    <div>{{ props.obj.a }}</div>
    <div v-if="props.num">{{ props.num }}</div>
    <button @click="props.method('测试2')">{{ props.msg }}</button>
</template>

<style>

</style>
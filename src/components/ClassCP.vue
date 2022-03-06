<template>
    <div>
        <p class="foo" :class="$attrs.class">合并class</p>
        <p v-bind="$attrs">让内部元素继承attribute</p>
    </div>
</template>

<style>
    .foo{
        color : blue
    }
</style>

<script >
export default {
    inheritAttrs :false, // 默认绑定在根节点上，如果要自定义，设为false
    created(){
        console.log(this.$attrs)
    }
}
</script>
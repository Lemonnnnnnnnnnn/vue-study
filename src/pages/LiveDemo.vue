<template>
    <div>生命周期</div>
</template>
<script>
export default {
    /**
     * 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
     */
    setup() {
        onMounted(() => {
            console.log("mount生命周期-----------")
        })
    }
}
</script>
<style></style>
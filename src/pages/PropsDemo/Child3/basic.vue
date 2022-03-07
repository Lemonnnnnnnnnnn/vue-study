<template>
    <div>{{ title }}</div>
</template>
<script>
export default {
    props: { // 必须要注册后在setup中才能接收到
        title: {
            type: String,
            required: true
        }
    },
    // 在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
    setup(props) {
        return { ...props }
    }
}
</script>
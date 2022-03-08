<template>
    <div>{{ title }}</div>
</template>
<script>

export default {
    setup(props) {
        console.log(props)
        return { ...props }
    }
}
</script>
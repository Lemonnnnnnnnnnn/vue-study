<template>
    <div>
        <button @click="(e) => $emit('on-change-count', 2, e)">count +2</button>
        <button @click="$emit('on-change-count', e)">count +</button>
        <button @click="emit('on-change-count', e)">vue3 count +</button>
    </div>
</template>
<style>
</style>
<script >
export default {
    setup(props, { emit }) {
        return{
            emit
        }
    }
}
</script>
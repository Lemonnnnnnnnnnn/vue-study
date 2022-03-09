<template>
    <Bar />
    <Foo />
    <component :is="showBar ? Bar : Foo" />
</template>
<script setup>
const showBar = false

</script>
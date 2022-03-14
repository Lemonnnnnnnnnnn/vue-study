<template>
    <div>{{ userId }}</div>
    <div>{{ type }}</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
const { userId, type } = router.currentRoute.value.params

</script>

<style scoped>
</style>
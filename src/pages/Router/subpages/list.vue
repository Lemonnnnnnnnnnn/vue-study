<template>
    <ul>
        <li v-for="item in list" :key="item.userId">
            <router-link
                :to="`/router/detail/userId/${item.userId}/type/${item.type}`"
            >{{ item.type }}</router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
const list = [
    { userId: 1, type: 'modify' },
    { userId: 2, type: 'detail' },
    { userId: 3, type: 'create' },
]

</script>

<style scoped>
</style>
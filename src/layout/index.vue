<template>
    <el-menu mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="route in newRoute" :index="route.path" v-bind:key="route.name">{{ route.name }}
        </el-menu-item>
    </el-menu>
     <router-view />
</template>

<script setup lang="ts">
import { routes } from '../router'
import { useRouter } from 'vue-router'
const router = useRouter();
const newRoute = routes.filter(item => !item.hide)

function handleSelect(key: string) {
    router.push(key)
}

</script>

<style scoped>
</style>
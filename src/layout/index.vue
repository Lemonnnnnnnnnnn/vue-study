<template>
    <el-menu mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="route in childrenRouter" :index="route.path" v-bind:key="route.name">{{ route.name }}
        </el-menu-item>
    </el-menu>
     <router-view />
</template>

<script setup lang="ts">
import { routesArray } from '../router'
import { useRouter } from 'vue-router'
const router = useRouter();
const rootRouter = routesArray[0]
const childrenRouter = rootRouter.children.filter(item => !item.hide)

function handleSelect(key: string) {
    router.push(key)
}

</script>

<style scoped>
</style>
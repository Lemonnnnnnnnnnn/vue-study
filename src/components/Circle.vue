<template>
        <ul >
            <template v-for="item in list"> 
                <li>
                    {{ item.name }}
                    <my-circle v-if="'children' in item" :list="item.children" />
                </li>
            </template>
        </ul>
</template>

<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
</style>
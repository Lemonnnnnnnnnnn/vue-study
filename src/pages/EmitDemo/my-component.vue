<template>
    <div>
        <input
            type="text"
            :value="firstName"
            @input="$emit('update:firstName', $event.target.value)"
        />
        <input
            type="text"
            :value="secondName"
            @input="$emit('update:secondName', $event.target.value)"
        />
    </div>
</template>

<script setup lang="ts">
interface Props {
    firstName: string,
    secondName: string,
}
const { firstName, secondName } = defineProps<Props>()
defineEmits(['update:firstName','update:secondName']) //注册emits

</script>

<style scoped>
</style>
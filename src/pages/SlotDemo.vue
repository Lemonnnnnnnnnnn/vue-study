<script setup>
import { ref } from 'vue';
const footerValue = ref('123')
const exportValue = ref('exportValue')

//  defineEmit用来声明触发的事件表
const emit = defineEmits(['handleClick'])

const handleClick = () => {
    emit('aaa', 'emit') // 函数名，参数
}

const props = defineProps({ // defineProps 接收父组件传来的值，默认引用
    msg: String
})

defineExpose({
    exportValue
})

</script>
<template>
    <div>
        <!-- 默认插槽 -->
        <slot>
            <h3>没传内容</h3>
        </slot>
        <!-- 具名插槽 -->
        <slot name="header">
            <h3>没传header插槽</h3>
        </slot>
        <slot name="footer" :value="footerValue">
            <h3>没传footer插槽</h3>
        </slot>
    </div>

    <button @click="handleClick">测试emit</button>
</template>

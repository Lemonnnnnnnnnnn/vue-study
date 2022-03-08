<template>
    <input id="search" v-if="show" placeholder="搜索" />
    <button @click="showSearch()">展示搜索按钮</button>
    <!-- <button  @click="getFocus()">获取焦点</button> -->
</template>
<script>
import { nextTick, ref } from "vue";
//将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。

/**
 * nextTick原理
 * 1、异步说明
 * Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新
 * 2、事件循环说明
 * 简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
 */
export default {
    setup(props) {
        const show = ref(false)
        const showSearch = async () => {
            show.value = true
            await nextTick(); // 使getFocus可以获取input实体
            getFocus(); // DOM的修改是异步的，这里无法获取到input实体
        }
        const getFocus = () => {
            document.getElementById('search').focus() 
        }
        return {
            showSearch,
            show,
            getFocus
        }
    }
}

</script>
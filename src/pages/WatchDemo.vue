<template>
    <div>
        <div>{{ counter }}</div>
        <div>{{ my_text }}</div>
        <button @click="onAdd">add</button>

        <h3>侦听响应式对象</h3>
        <button @click="changeList">change list</button>

        <h3>侦听深层对象</h3>
        <button @click="changeObject">change object</button>
    </div>
</template>
<script>
import { ref, watch } from 'vue'
const counter = ref(0)
const my_text = ref('not over')
const list = ref([1, 2, 3])
const deepObject = ref({
    foo: {
        bar: [1]
    }
})
// 注意多个同步更改只会触发一次侦听器。
watch([counter, my_text], (newVal, oldVal) => {
    if (newVal[0] === 5) {
        my_text.value = 'over!'
    }
})

watch(list, (newVal, oldVal) => {
    console.log(newVal) // 没有执行
})

watch(() => [...list.value], (newVal, oldVal) => {
    console.log(newVal) // 执行
})

watch(deepObject, (newVal, oldVal) => {
    console.log(newVal) // 没有执行
})

watch(() => deepObject, (newVal, oldVal) => {
    console.log(newVal.value.foo.bar) // 执行
}, { deep: true })

// 用深拷贝也可以
// watch(
//   () => _.cloneDeep(state),
//   (state, prevState) => {
//     console.log(state.attributes.name, prevState.attributes.name)
//   }
// )
export default {
    methods: {
        onAdd() {
            counter.value++;
        }
    },
    watch: {
        counter(newVal, oldVal) {
            if (newVal === 10) {
                alert('dont click !!!')
            }
        }
    },
    setup(props) {
        const changeList = () => {
            list.value.push('4')
        }
        const changeObject = () => {
            deepObject.value.foo.bar.push(2)
        }
        return {
            counter,
            my_text,
            list,
            deepObject,
            changeList,
            changeObject,
        }
    }
}

</script>
<style></style>
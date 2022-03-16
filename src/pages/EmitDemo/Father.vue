<template>
    <div>
        <Son @on-change-count="onChangeCount" />
        <my-component v-model:firstName="firstName" v-model:secondName="secondName"></my-component>
        <!--  是 :firstName="firstName" @update:firstName = "firstName = $event" 的 简写 -->
        <div>{{ count }}</div>
        <div>{{ firstName }}</div>
        <button @click="(e) => onGetEvent(e, 1)">获取参数</button>
    </div>
</template>
<style>
</style>
<script>
import Son from './Son.vue'
import myComponentVue from './my-component.vue'

export default {
    data() {
        return {
            count: 0,
            firstName: '',
            secondName: '',
        }
    },
    methods: {
        onChangeCount(num = 1, e) {
            console.log(e)
            this.count += num;
        },
        onGetEvent(e, a) {
            console.log(e, a)
        },
    },
    components: {
        Son,
        'my-component': myComponentVue,
    }
}

</script>
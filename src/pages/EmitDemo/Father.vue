<template>
    <div>
        <Son @on-change-count="onChangeCount" />
        <div>{{ count }}</div>
        <button @click="(e)=>onGetEvent(e,1)">获取参数</button>
    </div>
</template>
<style>
</style>
<script>
import Son from './Son.vue'

export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        onChangeCount(num = 1 , e) {
            console.log(e)
            this.count += num;
        },
        onGetEvent(e , a){
            console.log(e , a)
        }
    },
    components:{
        Son,
    }
}

</script>
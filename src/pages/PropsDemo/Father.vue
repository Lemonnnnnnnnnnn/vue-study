<template>
    <div>
        <vue-child title="vue2-props"></vue-child>
        <vue3-child1 title="vue3-child1"></vue3-child1>  
        <!-- <vue3-child2 title="vue3-child2"></vue3-child2>   -->
    </div>
</template>
<script >
import Vue2Child from './Child2.vue'
import Vue3Child1 from './Child3/write1.vue'
// import Vue3Child2 from './Child3/write2.vue'
export default{
    components:{
        'vue-child' : Vue2Child,
        'vue3-child1' : Vue3Child1,
        // 'vue3-child2' : Vue3Child2,
    }
}
</script>
<style></style>
<script lang="ts" setup>
import { routes } from './router'
import {useRouter} from 'vue-router'

const router = useRouter();

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import SlotDemo from './components/SlotDemo.vue'
// import propsDemo from './components/propsDemo.vue'
// import {ref} from 'vue'
// const childCtx = ctx => {
//   console.log(ctx)
// }
// const method = (aaa) => {
//   console.log(aaa)
// }

// const testEmit = val=>{
//   console.log("传递给父组件")
//   console.log(val)
// }

// const slotdemo = ref(null)

// const testExpose = () => {
//   console.log(slotdemo.value.exportValue)
// }

// console.log(this.$route)
// const routerChange = () =>{

// }
function handleSelect(key , keyPath){
  // console.log(key , keyPath);
  router.push(key)
}


</script>

<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="route in routes" :index="route.path" v-bind:key="route.name">{{route.name}}</el-menu-item>
  </el-menu>
  <!-- <router-link to="/">返回</router-link>
  <ul>
    <li v-for="route in routes" v-bind:key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link> 
    </li>
  </ul> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <button @click="testExpose">父组件按钮</button>
  <SlotDemo ref="slotdemo" msg="hello" @aaa="testEmit">
    <template v-slot>
      <div>默认插槽</div>
  </template>-->
  <!--具名插槽-->
  <!-- #header === v-slot:header -->
  <!-- <template #header>
      <div>具名插槽</div>
  </template>-->
  <!-- <template v-slot:header>
      <div>具名插槽</div>
  </template>-->

  <!--作用域插槽-->
  <!-- <template #footer="slotProps">
      <div>{{ slotProps.value }}</div>
  </template>-->
  <!-- </SlotDemo> -->
  <!-- <propsDemo :method="method" num="900" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

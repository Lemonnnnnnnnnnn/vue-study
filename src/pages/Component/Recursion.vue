<template>
    <div>
        <my-circle :list="navList" />
    </div>
</template>

<script setup lang="ts">
const navList = [
{
  name: '一级导航 1'
},
{
  name: '一级导航 2',
  children: [
    { name: '二级导航 2-1' },
    {
      name: '二级导航 2-2',
      children: [
        { name: '三级导航 2-2-1' },
        { name: '三级导航 2-2-2' },
      ]
    },
    { name: '二级导航 2-2' }
  ]
},
{
  name: '一级导航 3'
}
]
</script>

<style scoped>

</style>
<script>
export default {
    data() {
        return {
            classObject: {
                active: true,
                'text-danger': true,
            },
            isActive: true,
            error: 'fatal',
            success: 'text-success',
            large: 'text-large',
            color: 'orange',
            styleObject: {
                fontSize: '20px'
            },
            border: "1px solid red"
        }
    },
    computed: {
        classObject2() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error === 'fatal'
            }
        }
    }
}
</script>
<template>
    <div :class="classObject2">若class值为对象，会自动遍历添加对象中的属性值作为class（对象语法）</div>
    <div :class="[success, isActive ? large : '']">class数组渲染、条件渲染（数组语法、三元表达式）</div>
    <div :class="[{ active: isActive }, classObject2]">数组语法和对象语法</div>
    <my-class-component class="text-large"></my-class-component>
    <div :style="[styleObject, { color }]">style</div>

    <div class="border">border</div>
</template>
<style>
.active {
    font-size: 20px;
}
.text-danger {
    color: red;
}
.text-large {
    font-size: 40px;
}
.text-success {
    color: greenyellow;
}
.border {
    border: v-bind(border);
}
</style>
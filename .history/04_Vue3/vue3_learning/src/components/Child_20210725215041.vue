<template>
  <h2>Child子级组件</h2>
  <h3>msg:{{ msg }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Child",
  props: ["msg"],
  components: {},
  // setup细节问题
  // 数据初始化的生命周期回调
  beforeCreate() {
    console.log("beforeCreate执行了");
  },
  setup() {
    console.log("setup执行了");
    return {
      // setup一般都是返回一个对象，对象中的属性和方法都可以在html目标中直接使用
    };
  },
});
</script>

<style scoped>
</style>
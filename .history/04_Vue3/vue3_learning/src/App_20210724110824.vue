<template>
  <div>哈哈，我又变帅了</div>
</template>

<script lang="ts">
// defineComponent函数,目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: "App",
  setup() {
    console.log("我来了");
  },
});
</script>


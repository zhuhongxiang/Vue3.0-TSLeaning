<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  // vue2的方式实现
  // data() {
  //   return {
  //     count: 0,//属性
  //   };
  // },
  // methods: {
  //   updateCount() { // 方法
  //     this.count++;
  //   },
  // },

  // vue3的方式实现
  // setup是组合API的入口函数
  setup() {
    // 变量
    let count = 0;
    // 方法
    function updateCount() {
      count++;
    }
    // 返回的是一个对象
    return {
      // 属性
      count,
      updateCount,
    };
  },
});
</script>


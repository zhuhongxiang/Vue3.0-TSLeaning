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
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateCount() {
      this.count++;
    },
  },

  // vue3的方式实现
});
</script>


<template>
  <h2>自定义hook函数操作</h2>
  <h3>x:{{ x }},y:{{ y }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  // 需求1：用户在页面中点击页面，把点击的位置的横纵坐标收集并展示出来
  setup() {
    const x = ref(-1);
    const y = ref(-1);
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>
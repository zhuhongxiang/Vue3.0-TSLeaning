<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3> -->

  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      name: "zilaiye",
      age: 47,
    });
    // 定时器，更新数据(如果数据变化了，界面也会随之变化，肯定是响应式的数据)
    setInterval(() => {
      state.name += "==";
      console.log("=====");
    }, 2000);
    return {
      //state,
      ...state,
    };
  },
});
</script>

<style scoped>
</style>
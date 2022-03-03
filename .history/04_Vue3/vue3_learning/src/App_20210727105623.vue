<template>
  <h2>toRaw和markRaw</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRaw, markRaw } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      name: "小明",
      age: 20,
    });
    const testToRaw = () => {
      // 把代理对象变成了普通对象，数据变化，界面不变化
      const user = toRaw(state);
      user.name += "==";
      console.log("hh");
    };
    const testMarkRaw = () => {
      console.log("lll");
    };

    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>

<style scoped>
</style>
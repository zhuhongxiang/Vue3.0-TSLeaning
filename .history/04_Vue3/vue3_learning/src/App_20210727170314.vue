<template>
  <h2>provide与inject</h2>
  <p>当前的颜色：{{ color }}</p>
  <button @click="color = 'red'">红色</button>
  <button @click="color = 'yellow'">黄色</button>
  <button @click="color = 'green'">绿色</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const color = ref("red");
    return {
      color,
    };
  },
});
</script>

<style scoped>
</style>
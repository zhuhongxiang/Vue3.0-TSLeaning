<template>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  // 需求：当页面加载完毕后，页面中的文本框可以直接获取焦点()
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
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
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
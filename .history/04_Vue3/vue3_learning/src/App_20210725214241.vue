<template>
  <h2>App父级组件</h2>
  <hr />
  <Child />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  props: {},
  components: { Child },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
<template>
  <h3 :style="{ color }">GrandSon孙子组件</h3>
</template>

<script lang='ts'>
import { defineComponent, inject, reactive } from "vue";
export default defineComponent({
  name: "GrandSon",
  props: {},
  components: {},
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>

<style scoped>
</style>
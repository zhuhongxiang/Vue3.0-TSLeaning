<template>
  <h3>Son子级组件</h3>
  <hr />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import GrandSon from "./GrandSon.vue";
export default defineComponent({
  name: "Son",
  props: {},
  components: { GrandSon },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
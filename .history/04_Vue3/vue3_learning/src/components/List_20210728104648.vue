<template>
  <ul class="todo-main">
    <Item />
  </ul>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import Item form './Item.vue'
export default defineComponent({
  name: "List",
  props: {},
  components: {Item},
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
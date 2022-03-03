<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keydown.enter="add"
      v-model="title"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Header",
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
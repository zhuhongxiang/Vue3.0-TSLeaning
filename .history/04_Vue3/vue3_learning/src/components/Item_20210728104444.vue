<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>&nbsp;{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-if="isShow" @click="del">删除</button>
  </li>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Item",
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
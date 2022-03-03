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
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
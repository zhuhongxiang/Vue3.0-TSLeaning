<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" /><br />
    名字：<input type="text" placeholder="请输入名字" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
  </fieldset>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
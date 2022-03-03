<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" /><br />
    名字：<input type="text" placeholder="请输入名字" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" /><br />
    姓名：<input type="text" placeholder="显示姓名" /><br />
    姓名：<input type="text" placeholder="显示姓名" /><br />
  </fieldset>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    // 定义一个响应式的对象
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    return {
      user,
    };
  },
});
</script>

<style scoped>
</style>
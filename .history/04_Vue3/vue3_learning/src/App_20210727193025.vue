<template>
  <h2>App父级组件：Suspense组件的使用</h2>
  <AsyncComponent />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
// 引入组件：静态引入和动态引入

// vue2中的动态引入组件的写法
const AsyncComponent = () => import("./AsyncComponent.vue");
export default defineComponent({
  name: "App",
  props: {},
  components: {
    AsyncComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
<template>
  <h2>Child子级组件</h2>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Child",
  props: {},
  components: {},
  // vue2.x中的生命周期钩子
  beforeCreate() {
    console.log("2.x中的beforeCreate");
  },
  created() {
    console.log("2.x中的x中的created");
  },
  beforeMount() {
    console.log("2.x中的beforeMount");
  },
  mounted() {
    console.log("2.x中的x中的mounted");
  },
  beforeUpdate() {
    console.log("2.x中的beforeUpdate");
  },
  updated() {
    console.log("2.x中的x中的updated");
  },
  // vue2.x中的beforeDestory和destoryed这两个生命周期回调已经在vue3中改名了
  beforeUnmount() {
    console.log("3.x中的x中的beforeUnmounty");
  },
  unmounted() {
    console.log("3.x中的x中的unmounted");
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
<template>
  <h2>readonly和shalowReadonly</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      name: "佐助",
      age: 20,
      car: {
        name: "奔驰",
        color: "yellow",
      },
    });
    const update = () => {
      console.log("ceshi");
    };

    return {
      state,
      update,
    };
  },
});
</script>

<style scoped>
</style>
<template>
  <h2>readonly和shalowReadonly</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, readonly } from "vue";
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
    const state2 = readonly(state);
    const update = () => {
      state2.car.name += "===";
    };

    return {
      state2,
      update,
    };
  },
});
</script>

<style scoped>
</style>
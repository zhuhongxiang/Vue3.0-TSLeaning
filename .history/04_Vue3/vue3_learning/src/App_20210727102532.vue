<template>
  <h2>readonly和shalowReadonly</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
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
    // 深度只读数据
    // const state2 = readonly(state);
    const state2 = shallowReadonly(state);
    const update = () => {
      state2.name += "===";
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
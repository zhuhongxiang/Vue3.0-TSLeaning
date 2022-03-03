<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m3 = ref({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });

    return {
      m1,
      m2,
      m3,
      m4,
    };
  },
});
</script>

<style scoped>
</style>
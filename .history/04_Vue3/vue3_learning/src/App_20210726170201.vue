<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3> -->

  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      name: "zilaiye",
      age: 47,
    });
    // toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
    const state2 = toRefs(state);
    console.log(state2);
    // 定时器，更新数据(如果数据变化了，界面也会随之变化，肯定是响应式的数据)
    setInterval(() => {
      // state.name += "==";
      state2.name.value += "==";
      console.log("=====");
    }, 2000);
    return {
      //state,
      // 下面的方式不行啊
      // ...state,// 不是响应式的数据了---->{name:'zilaiye',age:47}
      ...state2,
    };
  },
});
</script>

<style scoped>
</style>
<template>
  <h2>自定义hook函数操作</h2>
  <h3>x:{{ x }},y:{{ y }}</h3>
</template>

<script lang='ts'>
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  // 需求1：用户在页面中点击页面，把点击的位置的横纵坐标收集并展示出来
  setup() {
    const x = ref(-1);
    const y = ref(-1);

    // 点击事件的回调函数
    const clickHandler = (event) => {
      x.value = event.pageX;
      y.value = event.pageY;
    };

    // 页面已经加载完毕，再进行点击的操作
    // 页面加载完毕的生命周期组合API
    onMounted(() => {
      window.addEventListener("click", clickHandler);
    });
    // 页面卸载前的生命周期组合API
    onBeforeUnmount(() => {
      window.removeEventListener("click", clickHandler);
    });
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>
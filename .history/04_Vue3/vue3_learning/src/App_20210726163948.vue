<template>
  <h2>自定义hook函数操作</h2>
  <h3>x:{{ x }},y:{{ y }}</h3>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
</template>

<script lang='ts'>
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  // 需求1：用户在页面中点击页面，把点击的位置的横纵坐标收集并展示出来
  setup() {
    const { x, y } = useMousePosition();
    // 发送请求
    const { loading, data, errorMsg } = useRequest("/data/address.json"); // 获取对象数据
    // const {loading,data,errorMsg} = useRequest('地址2')// 获取数组数据
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>

<style scoped>
</style>
<template>
  <h2>Child子级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <h3>count:{{ count }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Child",
  props: ["msg"],
  components: {},
  // setup细节问题
  // setup是在beforeCreate生命周期回调之前就执行了，而且就执行一次
  // 由此可以推断出：setup在执行时当前组件还没有创建出来，也就意味着：组件实例对象this根本就不能用
  // this是undefined，说明就不能通过this去访问data,computed,methods,props
  // 其实所有的composition API相关回调函数中也都不可以

  // setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
  // setup中的对象内部的属性和data函数中的return对象的属性都可以在Html模板中使用
  // setup中的对象的属性和data函数中的对象中的属性会合并为组件对象的属性
  // setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法
  // 在Vue3中尽量不要混合使用data和setup及methods和setup
  // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

  // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log("beforeCreate执行了");
  // },
  // 界面渲染完毕
  //   mounted(){},
  setup() {
    console.log("setup执行了", this);
    const showMsg1 = () => {
      console.log("setup中的showMsg方法");
    };
    return {
      // setup一般都是返回一个对象，对象中的属性和方法都可以在html目标中直接使用
      showMsg1,
    };
  },
  // data() {
  //   return {
  //     count: 10,
  //   };
  // },
  // mounted() {
  //   console.log(this);
  // },
  // methods: {
  //   showMsg2() {
  //     console.log("methods中的showMsg方法");
  //   },
  // },
});
</script>

<style scoped>
</style>
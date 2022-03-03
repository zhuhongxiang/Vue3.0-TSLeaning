<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr />
  <button @click="updateUser">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  /**
   * 作用: 定义多个数据的响应式
   * const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
   * 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
   * 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */
  setup() {
    const obj: any = {
      name: "zhu",
      age: 24,
      wife: {
        name: "莉莉",
        age: 18,
        cars: ["奔驰", "宝马"],
      },
    };
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user现在是代理对象，obj是目标对象
    const user = reactive(obj);
    console.log(user);
    // 方法
    const updateUser = () => {
      // 直接使用目标对象的方式来更新目标对象中的成员的值是不可能的，只能使用代理对象的方式来更新数据(响应式数据)
      // obj.name = "小白";
      // 下面的可以
      // user.name = "术洪祥";
      // user.age += 2;
      // user.wife.cars[0] = "玛莎拉蒂";

      // user ---->代理对象；obj---->目标对象
      // user对象或者是obj对象添加一个新的属性，哪一种方式会影响界面的更新
      obj.gender = "男";
      // user对象或者是obj对象移除一个已经存在的属性，哪一种方式会影响界面的更新
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>


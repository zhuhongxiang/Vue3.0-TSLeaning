<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, ref, watch } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    // 定义一个响应式的对象
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    // 通过计算属性的方式，实现第一个姓名的显示
    // vue3中的计算属性
    // 如果计算属性的函数中只传入一个回调函数，表示的是get

    // 第一个姓名
    // 返回的是一个Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    // 第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        // console.log("====", val);
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个姓名
    const fullName3 = ref("");
    // 监视----监视指定的数据
    watch(user, ({ firstName, lastName }) => {
      fullName3.value = firstName + "_" + lastName;
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style scoped>
</style>
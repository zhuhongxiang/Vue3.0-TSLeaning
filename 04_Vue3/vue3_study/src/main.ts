// 程序的主入口文件，ts文件，是main.ts
// 引入createApp函数，创建对应的应用产生应用的实例对象
import { createApp } from "vue";
// 引入App组件（所有组件的父级组件）
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 创建App应用返回对应的实例对象，使用vuex,router,调用mount方法进行挂载
createApp(App).use(store).use(router).mount("#app");

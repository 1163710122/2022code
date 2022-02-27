<template>
  <div>
    <p>{{message}}</p>
    <button @click="getChild">调用子组件的函数</button>
    <p>分割线-------组件通信和路由</p>
    <my-component ref="myCom" :message='message' @messageLong="getLong"></my-component>
    <router-link to="/page/wangjing">page</router-link>
    <component1></component1>
    <component2></component2>
    <p>分割线-------异步</p>
    <button @click="syn()">异步</button>
    <button @click="test()">测试</button>
  </div>
</template>


<script>
import myComponent from "@/components/HelloWorld";
import component1 from "@/components/component1";
import component2 from "@/components/component2";
export default {
  name: "homepage",
  data() {
    return {
      message: "这是第一页",
    };
  },
  provide() {
    return {
      parentValue: "第一页传的值",
    };
  },
  components: { myComponent, component1, component2 },
  methods: {
    getLong() {
      this.message = this.message + "go";
    },
    getChild() {
      this.$refs.myCom.dataChange();
    },
    syn() {
      console.log(this.timeout(true));
      console.log(this.timeout(false));
      this.timeout()
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("3");
    },
    async timeout(val) {
      console.log("1");
      if (val) {
        return "2.1";
      } else {
        throw "2.2";
      }
    },
    doubleAfter2seconds(num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * num);
        }, 2000);
      });
    },
    async testResult() {
      let first = await this.doubleAfter2seconds(30);
      let second = await this.doubleAfter2seconds(50);
      let third = await this.doubleAfter2seconds(30);
      console.log(first + second + third);
    },
    test(){
      this.testResult()
      console.log('hiahiahia')
    }
  },
};
</script>

<style>
</style>
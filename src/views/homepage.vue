<template>
  <div>
    <p>{{message}}</p>
    <button @click="getChild">调用子组件的函数</button>
    <p>分割线-------</p>
    <my-component ref="myCom" :message='message' @messageLong="getLong"></my-component>
    <router-link to="/page/wangjing">page</router-link>
    <component1></component1>
    <component2></component2>
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
  },
};
</script>

<style>
</style>
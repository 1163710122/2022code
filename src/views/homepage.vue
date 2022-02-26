<template>
  <div>
    <p>{{message}}</p>
    <button @click="getChild">调用子组件的函数</button>
    <p>分割线-------</p>
    <my-component ref="myCom" :message='message' @messageLong="getLong"></my-component>
  </div>
</template>


<script>
import myComponent from "@/components/HelloWorld";
export default {
  name: "homepage",
  data() {
    return {
      message: "父组件的值",
    };
  },
  provide(){
    return{
      parentValue:'爷爷辈组件'
    }
  },
  components: { myComponent },
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
<template>
  <div>
    <p>这是父组件传的值+{{message}}</p>
    <button @click="messageLong">与父组件通信</button>
    <p>{{data}}</p>
    <children></children>
  </div>
</template>

<script>
import children from '@/components/children'
export default {
  data() {
    return {
      data: 0,
    };
  },
  props: ["message"],
  components:{children},
  methods: {
    messageLong() {
      this.$emit("messageLong");
    },
    dataChange() {
      this.data++;
    },
  },
};
</script>

<style>
</style>
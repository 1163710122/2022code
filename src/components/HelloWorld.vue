<template>
  <div>
    <p>这是父组件传的值+{{message}}</p>
    <button @click="messageLong">与父组件通信</button>
    <p>{{data}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 0,
    };
  },
  props: ["message"],
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
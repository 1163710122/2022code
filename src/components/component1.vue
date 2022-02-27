<template>
  <div>
    <button @click="go()">组件{{count}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1111,
    };
  },
  methods: {
    go() {
      this.$bus.$emit("isCount", this.count);
    },
  },
};
</script>

<style>
</style>
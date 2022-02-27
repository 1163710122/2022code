<template>
  <div>
    <button>组件{{count}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 22222,
    };
  },
  methods: {
    show(val) {
      this.count = val;
    },
  },
  mounted() {
    this.$bus.$on("isCount", this.show);
  },
  beforDestory() {
    this.$bus.$off("isCount", this.show);
  },
};
</script>

<style>
</style>
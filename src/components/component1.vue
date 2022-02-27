<template>
  <div>
    <button @click="go()">组件{{count}}</button>
    <button class="c-Button c-Button--close">X</button>
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
/* BEM约定 */
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
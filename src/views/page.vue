<template>
  <div>
    <p>欢迎，{{$route.params.name}}</p>
    <router-link :to="{name:'login'}">login</router-link>
    <router-link :to="{name:'signin'}">signin</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "这是第二页",
    };
  },
};
</script>

<style>
</style>
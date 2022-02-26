<template>
  <div>
    <div class="center">居中{{parentValue}}</div>
    <div class="parent">
      <div class="son">hahahaha</div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["parentValue"],
};
</script>

<style scoped>
.center {
  background: orange;
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.parent {
  width: 300px;
  height: 300px;
  background: orange;
  text-align: center;
  display: table;
}
.son {
  display: table-cell;
  background-color: yellow;
  vertical-align: middle;
}
</style>
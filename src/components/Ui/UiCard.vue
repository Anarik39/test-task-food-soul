<template>
  <div class="card">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px;
  color: #303133;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>

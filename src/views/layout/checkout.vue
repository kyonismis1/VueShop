<template>
  <div class="container">
    <div>checkout</div>
    <div class="d-flex justify-content-center"><router-view /></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  // calc計算container內容，將Footer置底
  min-height: calc(100vh - 0vh);
}
</style>

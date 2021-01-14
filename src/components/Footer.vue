<template>
  <div class="footer d-flex justify-content-center pt-3">
    <div>
      <div>@OVERBRIDGE 本網站僅供練習</div>
      <div class="d-flex alige justify-content-around">
        <a href="#" @click.prevent="">這裡先</a>
        <a href="#" @click.prevent="">暫時</a>
        <a href="#" @click.prevent="">放個東西</a>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.footer {
  background: #878786;
  height: 15vh;
}
@media (max-width: 540px) {
  .footer {
    font-size: 15px;
  }
}
</style>

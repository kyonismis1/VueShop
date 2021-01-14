<template>
  <div>
    <BackendNavbar />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import BackendNavbar from "@/components/BackendNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components:{
      BackendNavbar,
      Footer
  }
}
</script>


<style lang="scss" scoped>
.container {
  // calc計算container內容，將Footer置底
  min-height: calc(100vh - 15vh);
}
</style>
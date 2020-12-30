<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
style.<style lang="scss" scoped>
.container {
  // calc計算container內容，將Footer置底
  min-height: calc(100vh - 25vh);
}
</style>

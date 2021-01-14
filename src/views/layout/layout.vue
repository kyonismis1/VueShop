<template>
  <div>
    <Navbar />
    <Login />
    <div class="container">
      <div class="row">
        <div class="col-sm-2 mt-5">
          <Menu />
        </div>
        <div class="col-sm-9 mt-5">
          <router-view />
        </div>
        <div class="col-sm-1 mt-5 p-0">
          <Cart />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Cart from "@/components/Cart.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    Navbar,
    Menu,
    Cart,
    Login,
    Footer
  },
};
</script>

<style lang="scss" scoped>
.container {
  // calc計算container內容，將Footer置底
  min-height: calc(100vh - 15vh);
}
</style>

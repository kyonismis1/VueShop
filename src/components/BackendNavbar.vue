<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="#">OVERBRIDGE後臺管理系統</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mr-3">
          <router-link to="/productList">商品列表</router-link>
        </li>
        <li class="nav-item mr-3">
          <router-link to="/orderList">訂單列表</router-link>
        </li>

        <li class="nav-item mr-3">
          <router-link to="/coupon">優惠卷管理</router-link>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            @click.prevent="signout"
          >
            管理者登出
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signout() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
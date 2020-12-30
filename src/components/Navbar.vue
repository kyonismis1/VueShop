<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">翰翰</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/Home">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/About">About</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/Store">Store</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/admin">admin</router-link>
          </li>
        </ul>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#login"
          v-show="isLogin == 'no'"
        >
          登入 / 註冊
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          @click.prevent="signout"
        >
          登出
        </button>
        <Login />
      </div>
    </nav>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  props: {
    msg: String
  },
  data() {
    return {
      isLogin: "no"
    };
  },
  components: {
    Login
  },
  methods: {
    signout() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.$http.post(api).then(response => {
        console.log(response.data);
        // localStorage.removeItem("token");
      });
    }
  }
};
</script>

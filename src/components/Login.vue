<template>
  <!-- 製作登入跳出畫面 -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    role="dialog"
    aria-labelledby="login"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <nav class="mx-auto">
            <div class="nav nav-pills" id="pills-tab" role="tablist">
              <a
                class="nav-item nav-link active px-5"
                id="nav-login-tab"
                data-toggle="tab"
                href="#nav-login"
                role="tab"
                aria-controls="nav-login"
                aria-selected="true"
                >登入</a
              >
              <a
                class="nav-item nav-link px-5"
                id="nav-registered-tab"
                data-toggle="tab"
                href="#nav-registered"
                role="tab"
                aria-controls="nav-registered"
                aria-selected="false"
                >註冊</a
              >
            </div>
          </nav>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-dialog-center">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-login"
                role="tabpanel"
                aria-labelledby="nav-login-tab"
              >
                <form @submit.prevent="signin">
                  <div class="form-group">
                    <label for="Input_Login_Email">電子郵件:</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="user.username"
                      id="Input_Login_Email"
                      aria-describedby="emailHelp"
                      placeholder="請輸入您的電子郵件"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                      >We'll never share your email with anyone else.</small
                    >
                  </div>
                  <div class="form-group">
                    <label for="Input_Login_Password">密碼:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="user.password"
                      id="Input_Login_Password"
                      placeholder="請輸入密碼"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="nav-registered"
                role="tabpanel"
                aria-labelledby="nav-registered-tab"
              >
                <form>
                  <div class="form-group">
                    <label for="Input_registered_Email">電子郵件:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="Input_registered_Email"
                      aria-describedby="emailHelp"
                      placeholder="請輸入您的電子郵件"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                      >We'll never share your email with anyone else.</small
                    >
                  </div>
                  <div class="form-group">
                    <label for="Input_registered_Password">密碼:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="Input_registered_Password"
                      placeholder="請輸入密碼"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Input_registered_CheckPassword"
                      >再次確認密碼:</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="Input_registered_CheckPassword"
                    />
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend mx-auto">
                      <div>
                        性別:
                        <input
                          type="radio"
                          aria-label="Radio button for following text input"
                          id="Input_registered_Sex_Male"
                          name="sex"
                          value="male"
                        />
                        <label for="Input_registered_Sex_Male">男性</label>
                        <input
                          type="radio"
                          aria-label="Radio button for following text input"
                          id="Input_registered_Sex_Female"
                          name="sex"
                          value="female"
                        />
                        <label for="Input_registered_Sex_Female">女性</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
/*global $ */
export default {
  name: "login",
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#login").modal("hide");
          vm.$router.push("Home");
        } else {
          alert("登入失敗");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>

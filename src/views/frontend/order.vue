<template>
  <div >
    <span>收件人資訊</span>
    <div class="my-5 row justify-content-center">
      <validation-observer v-slot="{ invalid }">
        <form @submit.prevent="createOrder">
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors, classes }">
              <label for="username">姓名</label>
              <input
                type="text"
                class="form-control"
                name="姓名"
                id="username"
                v-model="form.user.name"
                placeholder="輸入姓名"
                :class="classes"
              />
              <span class="invalid-feedback"> {{ errors[0] }} </span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              rules="required|email"
              v-slot="{ errors, classes }"
            >
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                v-model="form.user.email"
                placeholder="Email"
                class="form-control"
                :class="classes"
              />
              <span class="invalid-feedback"> {{ errors[0] }} </span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              rules="required|min:10"
              v-slot="{ errors, classes }"
            >
              <label for="usertel">電話</label>
              <input
                type="tel"
                class="form-control"
                id="usertel"
                name="電話"
                v-model="form.user.tel"
                placeholder="請輸入電話"
                :class="classes"
              />
              <span class="invalid-feedback"> {{ errors[0] }} </span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors, classes }">
              <label for="useraddress">收件人地址</label>
              <input
                type="text"
                class="form-control"
                name="收件人地址"
                id="useraddress"
                v-model="form.user.address"
                placeholder="請輸入地址"
                :class="classes"
              />
              <span class="invalid-feedback"> {{ errors[0] }} </span>
            </validation-provider>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
              placeholder="有什麼想告訴我們的?"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          message: "",
        },
      },
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/order`;
      const order = vm.form;
      this.$http.post(api, { data: order }).then((response) => {
        console.log("訂單", response);
        if (response.data.success) {
            vm.$router.push(`/orderFinish/${response.data.orderId}`);
        }
      });
    },
  },
};
</script>
<template>
  <div>
    <span>購物車商品</span>

    <div class="row d-flex justify-content-center">
      <div class="col-sm-4 mb-5">
        <div class="card cardInfo">
          <h2 class="card-title text-left bg-dark p-1">購物車內容</h2>
          <div class="card-body">
            <div class="card-text text-right">
              <p>共有{{ cart.carts.length }}件商品</p>
              <div v-if="cart.final_total === cart.total">
                <p>總計</p>
                <p>總計{{ cart.total | currency }}元</p>
              </div>
              <div v-else>
                <p class="text-left text-success">折扣價</p>
                <p class="text-right text-success">
                  {{ Math.floor(cart.final_total) | currency }}元
                </p>
              </div>

              <p></p>
              <p></p>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="輸入折價眷"
                  v-model="coupon_code"
                />
                <div>
                  <button
                    class="btn btn-dark form-control"
                    @click="addCouponCode"
                  >
                    使用折價眷
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-danger form-control"
                  @click="$router.push('/order')"
                >
                  結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card mb-2" v-for="(item, i) in cart.carts" :key="i">
          <button
            type="button"
            class="btn text-right p-0"
            aria-abel="close"
            @click="removeCartItem(item.id)"
          >
            <i
              class="fas fa-trash-alt mr-2"
              aria-hidden="true"
              style="color: #cc3333"
            ></i>
          </button>
          <div class="card-body d-flex productCard p-2">
            <div class="mr-3"><img :src="item.product.imageUrl" /></div>

            <div class="card-text mt-4">
              <p>{{ item.product.title }}</p>
              <p>{{ item.qty }}{{ item.product.unit }}</p>
              <p>{{ item.total }}元</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      deleteCartItem: false,
      coupon_code: "",
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/cart`;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/cart/${id}`;
      vm.deleteCartItem = true;
      this.$http.delete(api).then((response) => {
        console.log("刪除", response);
        vm.getCart();
        vm.deleteCartItem = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log("coupon", response);
        vm.getCart();
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
.table {
  color: #cc9966;
}
.card {
  background: #cccccc;
}
.productCard {
  img {
    width: 150px;
  }
  p {
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.2rem;
  }
}
.cardInfo {
  border: none;
  p {
    font-size: 1.2rem;
    line-height: 1;
    letter-spacing: 0.2rem;
  }
}
</style>
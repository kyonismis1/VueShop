<template>
  <div class="cart">
    <div class="dropleft">
      <button
        type="button"
        class="btn"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        @click="getCart"
      >
        <div class="cart_icon">
          <i class="fa fa-shopping-cart"></i>
          <div class="badge badge-danger badge-pill">
            {{ cart.carts.length }}
          </div>
        </div>
      </button>

      <div
        id="stopPropagation"
        class="dropdown-menu px-2"
        data-stopPropagation="true"
        style="background: #cccc99"
      >
        <table class="table table-sm" style="white-space: nowrap">
          <thead>
            <span>最近加入的商品</span>
            <i class="fas fa-spinner fa-spin" v-if="deleteCartItem"> </i>
            <tr>
              <th>名稱</th>
              <th>數量</th>
              <th>價錢</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in cart.carts" :key="i">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.final_total }}元</td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn p-0"
                  @click="removeCartItem(item.id)"
                >
                  <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td colspan="2" class="text-right">{{ cart.total }}元</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="2" class="text-right text-success">折扣價</td>
              <td colspan="2" class="text-right text-success">
                {{ cart.final_total }}元
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="d-flex">
          <button
            type="button"
            class="btn btn-dark ml-auto"
            @click="$router.push('/cartDetail')"
          >
            查看我的購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
/*global $*/

export default {
  data() {
    return {
      cart: {
        carts: {},
      },
      deleteCartItem: false,
    };
  },
  watch: {
    cart() {
      console.log("資料更新!");
    },
    deep: true,
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/cart`;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log("vm.cart:", vm.cart);
        //停止發泡事件，避免按下刪除跳出畫面
        $("body").on("click", "[data-stopPropagation]", (e) =>
          e.stopPropagation()
        );
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
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style lang="scss" scoped>
.cart_icon {
  color: black;
  font-size: 2rem;
}
.badge {
  font-size: 12px;
  padding: 3px 6px;
  color: #ffffff;
  position: absolute;
}
@media (max-width: 767px) {
  .cart {
    display: none;
  }
}
</style>

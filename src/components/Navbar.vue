<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
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
      <div class="navbar-brand mx-auto" @click.prevent="$router.push('/')">
        <img class="img-fluid" src="@/assets/Logo.svg" alt="Logo" />
      </div>
      <div class="dropdown">
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
          class="dropdown-menu dropdown-menu-right px-2"
          data-stopPropagation="true"
          style="background: #cccc99"
        >
          <table class="table table-sm">
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
                <td >{{ item.final_total }}元</td>
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

      <!-- 左方滑入選單 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="menu">
          <div id="menuTitle" class="mb-5">
            <div v-for="(item, index) in productCategory" :key="index">
              <div class="title d-flex mb-2" :id="'heading' + index">
                <a href="#" @click.prevent="changePage(item.category)">{{
                  item.name
                }}</a>

                <button
                  class="ml-auto"
                  data-toggle="collapse"
                  :data-target="'#collapse' + index"
                  aria-expanded="false"
                  :aria-controls="'#collapse' + index"
                >
                  +
                </button>
              </div>
              <div
                class="collapse mb-2"
                :id="'collapse' + index"
                :aria-labelledby="'heading' + index"
                data-parent="#menuTitle"
              >
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="(sub, i) in item.subCategory"
                    :key="i"
                    @click.prevent="changePage(sub.en)"
                  >
                    {{ sub.zh }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <ul class="list-group">
              <li class="list-item">
                <router-link class="nav-link" to="/About">About</router-link>
              </li>
              <li class="list-item">
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#login"
                >
                  管理者登入
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/*global $*/

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      productCategory: [
        {
          name: "上衣",
          category: "Shirt",
          subCategory: [
            { en: "Shortsleeve", zh: "短袖" },
            { en: "Longsleeve", zh: "長袖" },
          ],
        },
        {
          name: "長褲",
          category: "Pants",
          subCategory: [
            { en: "Jeans", zh: "牛仔褲" },
            { en: "Trousers", zh: "休閒長褲" },
          ],
        },
        {
          name: "外套",
          category: "Coat",
          subCategory: [
            { en: "Overcoat", zh: "大衣" },
            { en: "Suit", zh: "西裝外套" },
          ],
        },
      ],
      cart: {
        carts: {},
      },
      deleteCartItem: false,
    };
  },
  methods: {
    changePage(opction) {
      this.$router.push({
        name: "Store",
        params: { category: opction },
      });
    },
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
i{
  font-size: 30px;
}
.badge {
  font-size: 12px;
  padding: 3px 6px;
  color: #ffffff;
  position: absolute;
}
.navbar {
  display: none;
}
.navbar-brand {
  max-width: 50px;
}
#menuTitle {
  min-height: 40vh;
}
.title {
  font-size: 1.25rem;

  a {
    text-decoration: none;
    color: black;
    transition: all 1s ease;
    &:hover {
      opacity: 0.4;
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
  }
}
.list-item {
  list-style-type: none;
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.2rem;
  .nav-link {
    color: black;
  }
}
.list-group-item {
  border: none;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.2rem;
  padding: 0;
  margin-bottom: 0.5rem;
  background: none;
  transition: all 1s ease;
  &:hover {
    opacity: 0.4;
  }
}

.btn {
  padding: 10px 5px 10px 5px;
}
@media (max-width: 767px) {
  .navbar {
    display: flex;
  }
  .navbar-collapse {
    position: fixed;
    top: 78px;
    left: -75%;
    transition: 500ms ease-in-out;
    width: 70%;
    height: 100%;
    padding: 50px 40px;
    background: #cccccce5;
  }
  .show {
    left: 0px;
    transition: 300ms ease-out;
  }
  .dropdown-menu-right {
    margin-top: 30px;
    right: 0;
    left: auto;
}
  .dropdown-menu{
    width: 90vw;
}
.table{
  width:85vw;
  font-size: 0.7rem;
}
}
</style>
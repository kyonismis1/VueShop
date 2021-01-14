<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container d-flex justify-content-center mt-100">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="item in products" :key="item.id">
          <div class="product-wrapper text-center">
            <div class="product-img">
              <a href="#" data-abc="true" @click.prevent>
                <img class="img-fluid" :src="item.imageUrl" alt="" />
              </a>
              <span class="text-center" v-if="!item.price">
                {{ item.origin_price | currency }}
              </span>
              <span class="text-center" v-if="item.price">
                {{ item.price | currency }}
              </span>
              <div class="product-action">
                <div class="product-action-style">
                  <a href="#" @click.prevent="getDetail(item.id)">
                    <i class="fas fa-search-plus"></i>
                  </a>
                  <a href="#" @click.prevent="addCart(item.id)">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-45 text-center">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["para"],
  data() {
    return {
      products: [],
      isLoading: false
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        switch (vm.para) {
          case "Shirt":
            vm.products = response.data.products.filter(
              item => item.category === this.para
            );
            break;
          case "Shortsleeve":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;
          case "Longsleeve":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;
          case "Pants":
            vm.products = response.data.products.filter(
              item => item.category === this.para
            );
            break;
          case "Jeans":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;
          case "Trousers":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;
          case "Coat":
            vm.products = response.data.products.filter(
              item => item.category === this.para
            );
            break;
          case "Overcoat":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;
          case "Suit":
            vm.products = response.data.products.filter(
              item => item.subCategory === this.para
            );
            break;

          default:
            break;
        }
        vm.isLoading = false;
      });
    },
    getDetail(id) {
      const vm =this;
      console.log(id);
      vm.$router.push(`/product/${id}`);
    },
    addCart(id, qty = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/cart`;
      vm.isLoading = true;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response);
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Calibri:400,300,700");

body {
  vertical-align: middle;
  display: flex;
  font-family: "Calibri", sans-serif !important;
  background-color: #eee;
}

.mt-100 {
  margin-top: 100px;
}

.mb-45 {
  margin-bottom: 45px;
}

.product-wrapper,
.product-img {
  overflow: hidden;
  position: relative;
}

.product-action {
  bottom: 0px;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: center;
  transition: all 0.6s ease 0s;
}

.product-wrapper {
  border-radius: 10px;
}

.product-img > span {
  background-color: #fff;
  box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
  color: #333;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  left: 20px;
  letter-spacing: 1px;
  padding: 3px 12px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 20px;
}

.product-action-style {
  background-color: #fff;
  box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
  display: inline-block;
  padding: 16px 2px 12px;
}

.product-action-style > a {
  color: #979797;
  line-height: 1;
  padding: 0 21px;
  position: relative;
  & :hover {
    color: black;
  }
}

.product-action-style > a.action-plus {
  font-size: 18px;
}

.product-wrapper:hover .product-action {
  bottom: 20px;
  opacity: 1;
}
</style>

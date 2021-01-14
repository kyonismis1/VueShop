<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="mt-5">
      <div class="row">
        <div class="col-md-7">
          <img class="img-fluid" :src="detail.imageUrl" />
        </div>
        <div class="col-md-5">
          <div class="mb-4">
            <div>{{ detail.title }}</div>
            <div>{{ detail.description }}</div>
            <div>{{ detail.content }}</div>
          </div>
          <div>
            <div v-if="!detail.price">
              售價{{ detail.origin_price | currency }}元
            </div>
            <div v-if="detail.price">
              <s>原價{{ detail.origin_price | currency }}元</s>
            </div>
            <div v-if="detail.price">特價{{ detail.price | currency }}元</div>
            <div class="mt-2">
              <div>
                <span>數量</span>
                <select
                  class="bg-transparent"
                  name="qty"
                  id="qty"
                  v-model="qty"
                >
                  <option
                    :value="num"
                    v-for="num in 10"
                    :key="num"
                  >
                    {{ num }}
                  </option>
                </select>
              </div>
              <button
                class="btn btn-secondary"
                @click="addCart(detail.id, qty)"
              >
                加入購物車
                <i class="fas fa-spinner fa-spin" v-if="addtoCart"> </i>
              </button>
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
      id: "",
      qty:1,
      detail: {},
      isLoading: false,
      addtoCart: false
    };
  },
  methods: {
    getDetail() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/product/${vm.id}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.detail = response.data.product;
        console.log(vm.detail);
        vm.isLoading = false;
      });
    },
    addCart(id, qty) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/cart`;
      vm.addtoCart = true;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response);
        vm.addtoCart = false;
      });
    }
  },
  created() {
    console.log("細節CREATED");
    const vm = this;
    vm.id = this.$route.params.id;
    console.log(vm.id);
    this.getDetail();
  },
};
</script>

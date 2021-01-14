<template>
  <div>
    <p>finish</p>
    <button class="btn btn-danger" @click="payOrder">確認付款</button>
  </div>
</template>




<script>
export default {
  data() {
    return {
      order: {},
      orderId: "",
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/order/${vm.orderId}`;
      this.$http.get(api).then((response) => {
        console.log(response);
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/spay/${vm.orderId}`;
      this.$http.post(api).then((response) => {
        console.log(response);
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
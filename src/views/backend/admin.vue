<template>
  <div>
    <div class="text-right">
      <button>建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">主分類</th>
          <th width="100">次分類</th>
          <th width="100">產品名稱</th>
          <th width="100">品質分級</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enable" class="text-success">啟用</span>
            <span v-if="!item.is_enable">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getproducts() {
      const api =
        "https://vue-course-api.hexschool.io/api/hanvueshop/admin/products";
      const vm = this;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    }
  }
};
</script>

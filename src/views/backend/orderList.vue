<template>
  <div>
    <table class="table table-responsive mt-4">
      <thead class="thead-dark" style="white-space: nowrap">
        <th>購買時間</th>
        <th>購買人</th>
        <th>應付金額</th>
        <th>內容</th>
        <th>是否付款</th>
        <th>修改</th>
      </thead>
      <tbody v-for="(item, index) in orderList" :key="index">
        <tr>
          <td scope="row">{{ item.create_at | date }}</td>
          <td>{{ item.user.name }}</td>
          <td>${{ item.total | currency }}</td>
          <td>
            <button
              class="btn"
              data-toggle="collapse"
              :data-target="'#collapse' + index"
              aria-expanded="false"
              :aria-controls="'#collapse' + index"
            >
              <i class="fas fa-caret-down" style="color: #cc9966"></i>
            </button>
          </td>
          <td>
            <strong class="text-success" v-if="item.is_paid">已付款</strong>
            <span v-else>尚未付款</span>
          </td>
          <td>
            <button class="btn btn-warning btn-sm" @click="openEditModal(item)">
              編輯
            </button>
          </td>
        </tr>

        <td
          colspan="6"
          :id="'collapse' + index"
          class="collapse multi-collapse"
          style="white-space: nowrap"
        >
          <div>
            <!-- <td>{{ item.user.email }}</td> -->
            <ul class="list-group list-unstyled">
              <li class="list-group-item">
                <span>購買產品:</span>
                <ul>
                  <li v-for="(product, i) in item.products" :key="i">
                    {{ product.product.title }}{{ product.qty
                    }}{{ product.product.unit }}
                  </li>
                </ul>
              </li>
              <li class="list-group-item">電話:{{ item.user.tel }}</li>
              <li class="list-group-item">地址:{{ item.user.address }}</li>
              <li class="list-group-item">留言:{{ item.message }}</li>
            </ul>
          </div>
        </td>
      </tbody>
    </table>
    <pagination :pages="pagination" @event="getOrderList" />

    <!-- EditModal -->
    <div
      class="modal fade"
      id="OrderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="OrderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="OrderModalLabel">編輯訂單</h5>
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
            <div class="form-row">
              <div class="form-group col-6">
                <input
                  type="text"
                  id="user"
                  class="form-control"
                  placeholder="購買人姓名"
                  v-model="tempOrder.user.name"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  id="tel"
                  class="form-control"
                  placeholder="電話"
                  v-model="tempOrder.user.tel"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  id="email"
                  class="form-control"
                  placeholder="email"
                  v-model="tempOrder.user.email"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  placeholder="住址"
                  v-model="tempOrder.user.address"
                />
              </div>
            </div>

            <ul class="list-unstyled">
              <li
                class="row"
                v-for="(product, i) in tempOrder.products"
                :key="i"
              >
                <div class="col-7">{{ product.product.title }}</div>
                <div class="col-2">
                  <input
                    type="num"
                    class="form-control text-right p-1"
                    id="qty"
                    placeholder="數量"
                    v-model="product.qty"
                  />
                </div>
                <div class="col-2">
                  {{ product.product.unit }}
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              離開
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="EditOrder"
            >
              儲存變更
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*global $ */
import pagination from "@/components/pagination.vue";

export default {
  data() {
    return {
      orderList: {},
      pagination: {},
      tempOrder: {
        products: {},
        user: {},
      },
    };
  },
  components: {
    pagination,
  },
  methods: {
    getOrderList(page = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/orders?page=${page}`;
      this.$http.get(api).then((response) => {
        vm.orderList = response.data.orders;
        vm.pagination = response.data.pagination;
        console.log(vm.orderList);
      });
    },
    openEditModal(item) {
      $("#OrderModal").modal("show");
      this.tempOrder = Object.assign({}, item);
      console.log(this.tempOrder);
    },
    EditOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/order/${vm.tempOrder.id}`;
      this.$http.put(api, { data: vm.tempOrder }).then((response) => {
        console.log(response);
        if (response.data.success) {
          $("#OrderModal").modal("hide");
          vm.getOrderList();
          console.log("編輯成功");
        } else {
          $("#OrderModal").modal("hide");
          vm.getOrderList();
          console.log("編輯失敗");
        }
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>

<style lang="scss" scoped>
.table {
  color: #cc9966;
}
</style>
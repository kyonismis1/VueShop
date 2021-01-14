<template>
  <!-- date 格式沒用好，正在建立新增優惠 -->
  <div>
    <div class="text-right mt-2">
      <button
        type="button"
        class="btn btn-primary"
        @click="openCouponModal(true)"
      >
        建立優惠卷
      </button>
    </div>

    <table class="table  table-responsive mt-4" style="white-space: nowrap">
      <thead class="thead-dark">
        <tr>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>到期日</th>
          <th>折扣百分比</th>
          <th>是否啟用</th>
          <th>編輯</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in coupons" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.due_date | date }}</td>
          <td>{{ item.percent }}</td>
          <td>
            <strong class="text-success" v-if="item.is_enabled === 1"
              >已啟用</strong
            >
            <span v-else>尚未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-primary"
              @click="openCouponModal(false, item)"
            >
              編輯
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="removeCoupon(item.id)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @event="getCoupon" />
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">建立優惠卷</h5>
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
            <div class="form-group">
              <label for="title">名稱</label>
              <input
                id="title"
                type="text"
                class="form-control"
                placeholder="請輸入名稱"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                id="coupon_code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                id="due_date"
                type="date"
                class="form-control"
                v-model="due_date"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                id="pricee"
                type="number"
                class="form-control"
                placeholder="請輸入折扣百分比"
                v-model="tempCoupon.percent"
              />
            </div>
            <div class="form-group text-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                  v-model="tempCoupon.is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="updatedCoupon">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*global $*/
import pagination from "@/components/pagination.vue";

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: "",
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: "",
      },
      due_date: new Date(),
      pagination: {},
      isNew: false,
    };
  },
  components: {
    pagination,
  },
  //data裡due_date先利用new Date獲得格林威治標準時間 不然會帶入年-月-日，再/1000將日後面去除
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    getCoupon(page = 1) {
      const vm = this;
      let api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupons?page=${page}`;
      this.$http.get(api).then((response) => {
        console.log(response);
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openCouponModal(isNew, item) {
      const vm = this;
      $("#couponModal").modal("show");
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      } else {
        vm.tempCoupon = Object.assign({}, item);
        //toISOSstring().split("T")轉換格式
        //split將時間分為兩個物件，只採用第一個yyyy-mm-dd，所以使用dateAndTome[0]，所以使用dateAndTome[0]
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000)
          .toISOString()
          .split("T");
        console.log("time:", dateAndTime);
        vm.due_date = dateAndTime[0];
      }
    },
    updatedCoupon() {
      const vm = this;
      if (vm.isNew) {
        const api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon`;
        this.$http.post(api, { data: vm.tempCoupon }).then((response) => {
          console.log(response);
          $("#couponModal").modal("hide");
          vm.getCoupon();
        });
      } else {
        const api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon/${vm.tempCoupon.id}`;
        this.$http.put(api, { data: vm.tempCoupon }).then((response) => {
          console.log(response);
          $("#couponModal").modal("hide");
          vm.getCoupon();
        });
      }
    },
    removeCoupon(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon/${id}`;
      this.$http.delete(api).then((response) => {
        console.log("remove:", response);
        vm.getCoupon();
      });
    },
  },

  created() {
    this.getCoupon();
  },
};
</script>
<style lang="scss" scoped>
.table {
  color: #cc9966;
}
</style>
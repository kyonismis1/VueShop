<template>
  <div>
    <ProductCard :para="para" ref="productCard" />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      para:"",
    };
  },
  created() {
    let vm = this;
    vm.para = this.$route.params.category;
  },
  // 換至其他類別時，要抓取新路由的category。因為productCard是一獨立元件，用$ref通知重新抓取資料
  watch:{
    $route(to){
      let vm = this;
      vm.para = to.params.category;
      this.$refs.productCard.getProducts();
    }
  }
};
</script>

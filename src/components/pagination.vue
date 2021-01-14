<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getPages(pages.current_page - 1)"
          >
            <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="item in pages.total_pages"
          :key="item"
          :class="{ active: pages.current_page === item }"
        >
          <a class="page-link" href="#" @click.prevent="getPages(item)">
            {{ item }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getPages(pages.current_page + 1)"
          >
            <span aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //pages 來自admin.vue > pagunation變數
  props: ["pages"],
  methods: {
    getPages(num) {
      // @event 在 Admon.vue 指向 getProducts
      this.$emit("event", num);
    }
  }
};
</script>

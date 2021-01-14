<template>
  <div>
    <div
      id="carouselBanner"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselBanner"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselBanner" data-slide-to="1"></li>
        <li data-target="#carouselBanner" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active " data-interval="5000">
          <img src="@/assets/banner01.jpg" class="d-block w-100" />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="@/assets/banner02.jpg" class="d-block w-100" />
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="@/assets/banner03.jpg" class="d-block w-100" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
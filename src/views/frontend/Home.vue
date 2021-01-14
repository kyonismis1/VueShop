<template>
  <div class="my-5">
    <Carousel />
    <div class="row mt-3 text-center">
      <div class="col-sm-4 ">
        <img
          class="img-fluid rounded-circle"
          src="@/assets/home02.jpg"
          alt=""
        />
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div class="col-sm-4">
        <img
          class="img-fluid rounded-circle"
          src="@/assets/home01.jpg"
          alt=""
        />
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="col-sm-4">
        <img
          class="img-fluid rounded-circle"
          src="@/assets/home03.jpg"
          alt=""
        />
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/carousel";

export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
h3{
  font-size: 40px;
  color: white;
}
p{
  font-size: 16px;
}
</style>
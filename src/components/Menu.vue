<template>
  <div class="menu sticky-top">
    <div class="logo mb-3" @click.prevent="$router.push('/')">
      <img src="@/assets/Logo.svg" alt="Logo" />
    </div>
    <div id="menuTitle" class="mb-5">
      <div v-for="(item, index) in productCategory" :key="index">
        <div class="title d-flex mb-2" :id="'heading' + index">
          <a href="#" @click.prevent="changePage(item.category)">{{
            item.name
          }}</a>

          <button
            class="ml-auto"
            data-toggle="collapse"
            :data-target="'#collapse' + index"
            aria-expanded="false"
            :aria-controls="'#collapse' + index"
          >
            +
          </button>
        </div>
        <div
          class="collapse mb-2"
          :id="'collapse' + index"
          :aria-labelledby="'heading' + index"
          data-parent="#menuTitle"
        >
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(sub, i) in item.subCategory"
              :key="i"
              @click.prevent="changePage(sub.en)"
            >
              {{ sub.zh }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <ul class="list-group">
        <li class="list-item">
          <router-link class="nav-link" to="/About">About</router-link>
        </li>
        <li class="list-item">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-danger"
        data-toggle="modal"
        data-target="#login"
      >
        管理者登入
      </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      productCategory: [
        {
          name: "上衣",
          category: "Shirt",
          subCategory: [
            { en: "Shortsleeve", zh: "短袖" },
            { en: "Longsleeve", zh: "長袖" }
          ]
        },
        {
          name: "長褲",
          category: "Pants",
          subCategory: [
            { en: "Jeans", zh: "牛仔褲" },
            { en: "Trousers", zh: "休閒長褲" }
          ]
        },
        {
          name: "外套",
          category: "Coat",
          subCategory: [
            { en: "Overcoat", zh: "大衣" },
            { en: "Suit", zh: "西裝外套" }
          ]
        }
      ]
    };
  },

  methods: {
    changePage(opction) {
      this.$router.push({
        name: "Store",
        params: { category: opction }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#menuTitle {
  min-height: 40vh;
}
.logo {
  img {
    max-width: 90%;
    cursor: pointer; 
  }
}
.title {
  font-size: 1.25rem;

  a {
    text-decoration: none;
    color: black;
    transition: all 1s ease;
    &:hover {
      opacity: 0.4;
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
  }
}
.list-item {
  list-style-type: none;
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.2rem;
  .nav-link {
    color: black;
  }
}
.list-group-item {
  border: none;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.2rem;
  padding: 0;
  margin-bottom: 0.5rem;
  background: none;
  transition: all 1s ease;
  &:hover {
    opacity: 0.4;
  }
}
.btn {
  padding: 10px 5px 10px 5px;
}
@media( max-width:767px){
  .menu{display: none;}
}
</style>

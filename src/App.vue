<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./assets/all.scss";
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
//中文原體字形
#app {
  font-family: cwTeXYen, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #CC9966;
  font-size: 20px;
  line-height: 2;
  letter-spacing: 0.3rem;
  font-weight: 800;
  background: rgb(44, 44, 44);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/sub-two-home">Home</router-link> |
      <router-link to="/sub-two-about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    // 监听基座下发的数据变化
    window.microApp.addDataListener((data) => {
      // 解决当前的路由如果一直push会造成路由的冗余
      if (data.path === this.$route.path) {
        return
      }
      this.$router.push(data.path)
    }, true)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

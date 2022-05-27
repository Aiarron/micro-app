<template>
  <div>
    <div id="nav">
      <router-link to="/sub-home">Home</router-link> |
      <router-link to="/sub-about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup() {
    onMounted(() => {
      // 监听基座下发的数据变化
      const w = window as Record<string, any>
      console.log(w.microApp)
      w.microApp.addDataListener((data: Record<string, any>) => {
        console.log(data, '#########')
        // // 当基座下发跳转指令时进行跳转
        // if (data.path) {
        //   router.push(data.path)
        // }
      })
    })
  }
})
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

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
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    onMounted(() => {
      // 监听基座下发的数据变化
      const w = window as Record<string, any>
      w.microApp.addDataListener((data: Record<string, any>) => {
        router.push(data.path)
      }, true)
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

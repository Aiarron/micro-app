<template>
  <div class="app-container">
    <div class="header-content">header</div>
    <div class="app-main">
      <ul class="app-side">
        <li
          v-for="(item, index) in links"
          :key="`link-${index}`"
          @click="handleRoute(item)"
        >
          {{ item.text }}
        </li>
      </ul>
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import microApp from '@micro-zoe/micro-app'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const links = [
      {
        name: '',
        url: '/',
        text: 'Home',
        microUrl: ''
      },
      {
        name: 'app1',
        url: '/vue3',
        text: 'vue3版本',
        microUrl: '/sub-home'
      },
      {
        name: 'app-two',
        url: '/vue2',
        text: 'vue2版本',
        microUrl: '/sub-two-home'
      }
    ]
    const route = useRouter()
    const handleRoute = (item: {
      name: string
      url: string
      text: string
      microUrl: string
    }) => {
      route.push(item.url) // 跳转至主应用
      microApp.setData(item.name, { path: item.microUrl }) // 主应用下发数据控制由子应用控制跳转
    }

    return {
      links,
      handleRoute
    }
  }
})
</script>

<style scoped>
body {
  background: #f0f0f0;
}
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header-content {
  height: 40px;
  background-color: #333;
  color: #fff;
}
.app-side {
  width: 200px;
  background-color: #fff;
}
.app-main {
  flex: 1;
  display: flex;
}
.app-content {
  flex: 1;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
}
</style>

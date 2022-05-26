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
        text: 'Home'
      },
      {
        name: 'app1',
        url: '/about',
        text: 'vue3版本'
      },
      {
        name: 'app-two',
        url: '/vue2',
        text: 'vue2版本'
      }
    ]
    const route = useRouter()
    const handleRoute = (item: { name: string; url: string; text: string }) => {
      console.log(item)
      // if (!item.name) {
      //   route.push(item.url)
      //   return
      // }
      // microApp.setData(item.name, { path: item.url })
      microApp.setData('app1', { path: '/about' })
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

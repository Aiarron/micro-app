<template>
  <div class="about">
    <h1>This is an main apply page</h1>
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/main`
      url="http://localhost:20881/vue3"
     -->
    <micro-app name="app1" :url="url" baseroute="/main/vue3"></micro-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import config from '../config'

export default defineComponent({
  name: 'About',

  setup() {
    const url = `${config.vue3}/vue3`

    return {
      url
    }
  }
})
</script>

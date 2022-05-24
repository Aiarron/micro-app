<template>
  <div class="about">
    <h1>This is an main apply page</h1>
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app
      name="app1"
      url="http://localhost:20881/vue3"
      baseroute="/main"
    ></micro-app>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Home extends Vue {}
</script>

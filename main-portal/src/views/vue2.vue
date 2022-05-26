<template>
  <div>
    <h1>vue 2 page</h1>
    <micro-app name="app-two" :url="url" baseroute="/main/vue2"></micro-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import config from '../config'

export default defineComponent({
  name: 'VueTwoPage',
  setup() {
    const url = `${config.vue2}/vue2`

    return {
      url
    }
  }
})
</script>

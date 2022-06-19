<template>
  <div class="bg-bg min-h-screen">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script >
import Header from './components/Header.vue'

export default {

  components: {
    Header
  }

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

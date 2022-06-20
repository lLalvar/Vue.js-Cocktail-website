<template>
  <div class="bg-bg min-h-screen">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
</style>

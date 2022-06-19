<template>
  <div id="app" class="bg-slate-900 min-h-screen">
    <div class="container mx-auto bg-slate-900">
      <h1 class="text-4xl font-bold text-slate-100 p-4 text-center">Random Cocktails</h1>
    </div>
    <Cocktails />
  </div>
</template>

<script setup>
import Cocktails from './components/Cocktails.vue'
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

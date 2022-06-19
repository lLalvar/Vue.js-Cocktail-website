<template>
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-4xl font-bold text-slate-100 p-4 text-center">Cocktails</h1>
    <Input />
  </div>
</template>

<script >
import Input from './Input.vue'
export default {
  components: {
    Input,
  }
}
</script>
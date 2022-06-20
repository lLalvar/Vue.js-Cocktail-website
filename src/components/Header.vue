<template>
  <div class="container mx-auto p-4 flex justify-between items-center gap-4">
    <h1 @click="this.$router.push('/')" class="cursor-pointer text-4xl font-bold text-slate-100 text-center">
      Cocktails</h1>
    <Input />
  </div>
</template>

<script >
import Input from './Input.vue'
export default {
  components: {
    Input,
  },
}
</script>
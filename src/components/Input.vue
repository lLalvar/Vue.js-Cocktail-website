<template>
  <div class="flex">
    <div class="relative w-full">
      <input @change="handleInput" v-model="inputValue" type="search"
        class="block p-2.5 w-full z-20 text-sm text-slate-100 border-none bg-slate-800 rounded-lg focus:outline outline-offset-2 focus:outline-slate-100"
        placeholder="Search..." required>
      <button @click="handleInput"
        class="absolute top-0 -right-px p-2.5 text-sm font-medium text-white bg-slate-800 rounded-r-lg hover:bg-slate-900 transition"><svg
          class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput() {
      if (this.inputValue.length > 0) {
        this.$router.push(`/searched/${this.inputValue}`)
        this.inputValue = ''
      }
    }

  }
}
</script>

<style>
</style>


<!--  :stye="{ 'background-image': url(cocktail.strDrinkThumb) }" -->
<template>
  <ul class="container mx-auto py-8 px-4 grid gap-[2vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    <li class="w-full rounded-xl flex flex-col overflow-hidden" :key="cocktail.idDrink"
      v-for="cocktail in this.cocktails">
      <div class="img w-full aspect-3/4 bg-center bg-cover cursor-pointer transition-transform duration-500"
        :style="{ backgroundImage: `url(${cocktail.strDrinkThumb})` }">
      </div>
      <div class="z-10 px-[2vw] py-[1vw] bg-slate-100">
        <h3 class=" text-orange-800 font-medium">{{ cocktail.strAlcoholic }}</h3>
        <h2 class=" text-xl xl:text-2xl font-medium">{{ cocktail.strDrink }}</h2>
      </div>
    </li>

  </ul>
</template>
<script>
export default {
  name: 'Cocktails',
  async created() {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
    const data = await res.json()
    console.log(data.drinks);
    this.cocktails = data.drinks
  },
  methods: {

  },
  data() {
    return {
      cocktails: []
    }
  }
}
</script>
<style scoped>
li:hover .img {
  transform: scale(1.05);
}
</style>
<template>
  <ul class="container mx-auto grid gap-[2vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 justify-items-center">
    <li class="w-full" :key="cocktail.idDrink" v-for="cocktail in this.cocktails">
      <router-link :to="`/cocktail/${cocktail.idDrink}`"
        class="w-full rounded-xl cursor-pointer flex flex-col overflow-hidden">
        <div class="img w-full aspect-3/4 bg-center bg-cover transition-transform ease-in duration-300 scale-[1.01] "
          :style="{ backgroundImage: `url(${cocktail.strDrinkThumb})` }">
        </div>
        <div class="z-10 px-[2vw] py-[1vw] bg-slate-100">
          <h3 class="text-orange-800 font-medium">{{ cocktail.strAlcoholic }}</h3>
          <h2 class=" text-xl xl:text-2xl font-medium">{{ cocktail.strDrink }}</h2>
        </div>
      </router-link>
    </li>

  </ul>
</template>
<script>
export default {
  name: 'Home',
  async created() {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
    const data = await res.json()
    console.log(data.drinks[0]);
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
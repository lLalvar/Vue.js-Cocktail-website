<template>
  <ul v-if="this.searchedCocktails"
    class="container mx-auto grid gap-[2vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 justify-items-center">
    <li class="w-full" :key="searchedCocktails.idDrink" v-for="searchedCocktails in this.searchedCocktails">
      <router-link :to="`/cocktail/${searchedCocktails.idDrink}`"
        class="w-full rounded-xl cursor-pointer flex flex-col overflow-hidden">
        <div class="img w-full aspect-3/4 bg-center bg-cover transition-transform ease-in duration-300 scale-[1.01] "
          :style="{ backgroundImage: `url(${searchedCocktails.strDrinkThumb})` }">
        </div>
        <div class="z-10 px-[2vw] py-[1vw] bg-slate-100">
          <h3 class="text-orange-800 font-medium">{{ searchedCocktails.strAlcoholic }}</h3>
          <h2 class=" text-xl xl:text-2xl font-medium">{{ searchedCocktails.strDrink }}</h2>
        </div>
      </router-link>
    </li>
  </ul>
  <h1 v-else class="text-2xl text-slate-100 m-4">No cocktails found</h1>
</template>

<script >
export default {
  async created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.$route.params.id}`)
      const data = await res.json()
      this.searchedCocktails = data.drinks
      console.log(this.searchedCocktails);
    },
  },

  watch: {
    $route: function () {
      this.fetchData()
    }
  },

  data() {
    return {
      searchedCocktails: [],
    }
  }
}
</script>

<style scoped>
li:hover .img {
  transform: scale(1.05);
}
</style>
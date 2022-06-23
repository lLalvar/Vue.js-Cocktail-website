<template>
  <div
    class="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex flex-col justify-center items-center overflow-hidden">
    <div class="max-w-6xl bg-slate-100 w-screen flex flex-col sm:flex-row">
      <img :src="cocktail.strDrinkThumb" alt="Cocktail thumbnail" class="sm:w-1/2">
      <div class="p-8 flex flex-col gap-2 flex-1">
        <h1 class="text-2xl font-bold ">{{ cocktail.strDrink }}</h1>
        <h2 class="text-xl font-semibold">{{ cocktail.strAlcoholic }}</h2>
        <div>
          <h2 class="text-xl font-semibold">Ingredients</h2>
          <ul class="pl-2">
            <li v-if="cocktail.strIngredient1">- {{ cocktail.strIngredient1 }}</li>
            <li v-if="cocktail.strIngredient2">- {{ cocktail.strIngredient2 }}</li>
            <li v-if="cocktail.strIngredient3">- {{ cocktail.strIngredient3 }}</li>
            <li v-if="cocktail.strIngredient4">- {{ cocktail.strIngredient4 }}</li>
            <li v-if="cocktail.strIngredient5">- {{ cocktail.strIngredient5 }}</li>
            <li v-if="cocktail.strIngredient6">- {{ cocktail.strIngredient6 }}</li>
            <li v-if="cocktail.strIngredient7">- {{ cocktail.strIngredient7 }}</li>
            <li v-if="cocktail.strIngredient8">- {{ cocktail.strIngredient8 }}</li>
            <li v-if="cocktail.strIngredient9">- {{ cocktail.strIngredient9 }}</li>
            <li v-if="cocktail.strIngredient10">- {{ cocktail.strIngredient10 }}</li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold">Instructions</h2>
          <p>{{ cocktail.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  async created() {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`)
    const data = await res.json()
    this.cocktail = data.drinks[0]
  },
  data() {
    return {
      cocktail: {},
    }
  }

}
</script>


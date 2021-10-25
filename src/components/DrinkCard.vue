<template>
  <div class="my-3 p-3 bg-dark rounded shadow-sm" style="max-width: 18rem;" @click="drink">
    <h5 class="pb-2 mb-0">Getränk</h5>
    <h6 class="text-muted">1.5€</h6>
  </div>
</template>

<script>
export default {
  name: "DrinkCard",
  methods: {
    drink() {
      console.log("drink!");
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="home">
    <div class="row g-2">
      <div class="col-2 mx-auto" v-for="index in 20" :key="index">
        <DrinkCard></DrinkCard>
      </div>
    </div>
  </div>
</template>

<script>
import DrinkCard from "../components/DrinkCard";
export default {
  name: "Consume",
  components: {DrinkCard}
}
</script>

<style scoped>

</style>
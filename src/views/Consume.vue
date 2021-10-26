<template>
  <div class="home">
    <div class="row">
      <div class="col row g-2">
        <div v-for="beverage in beverages" :key="beverage.id" class="col-2 mx-auto">
          <DrinkCard @click="showCheckout(beverage)" :beverage="beverage"></DrinkCard>
        </div>
      </div>
      <div v-if="show" class="col-lg-4 mt-3 col-md-6">
        <ConsumeCard v-on:close="showCheckout" :beverage="selectedBeverage"></ConsumeCard>
      </div>
    </div>

  </div>
</template>

<script>
import DrinkCard from "../components/DrinkCard";
import ConsumeCard from "../components/ConsumeCard";

export default {
  name: "Consume",
  components: {DrinkCard, ConsumeCard},
  data() {
    return {
      show: false,
      selectedBeverage: null,
      beverages: [{
        "id": 1,
        "name": "Bier1",
        "price": 80,
        "size": "0.5l",
      },{
        "id": 2,
        "name": "Bier2",
        "price": 100,
        "size": "0.33l",
      },{
        "id": 3,
        "name": "Cola",
        "price": 100,
        "size": "0.5l",
      },{
        "id": 1,
        "name": "Spezi",
        "price": 150,
        "size": "0.5l",
      },]
    }
  },
  methods: {
    showCheckout(beverage) {
      this.selectedBeverage = beverage;
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>

</style>
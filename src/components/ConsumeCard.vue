<template>
  <div v-if="beverage" class="my-3 p-3 bg-dark rounded shadow-sm w-100" @click="drink">
    <h3 class="pb-2 mb-0">{{ beverage.name }}</h3>
    <h4 class="text-muted">{{ beverage.size / 1000 }} l</h4>
    <h4>{{ this.euros(beverage.price) }} €</h4>
    <form>
      <div class="input-group mb-3">
        <button :class="{'btn-secondary': this.amount <= 1, 'btn-success': this.amount > 1}"
                :disabled="this.amount <= 1" class="btn btn-lg  fs-1 fw-bolder w-25"
                type="button" @click="decrease">-
        </button>
        <input v-model="amount" class="form-control fs-1 text-center fw-bolder" min="1" type="number">
        <button class="btn btn-success btn-lg fs-1 fw-bolder w-25" type="button" @click="increase">+</button>
      </div>
      <div class="row mt-5">
        <span class="col-8"></span>
        <span class="col-4 fs-1 border-top text-end fw-bolder">€ {{ this.euros(beverage.price * amount) }}</span>
      </div>
      <div class="row">
        <div class="col-4">

          <button class="btn btn-outline-danger btn-lg w-100" @click="$emit('close')">Abbrechen</button>
        </div>
        <div class="col-8">
          <button class="btn btn-success btn-lg w-100" @click="buy(amount)">Saufen!</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import SwaggerClient from "swagger-client";
import spec from "../../swagger.json";

export default {
  name: "ConsumeCard",
  props: ["beverage", "userId"],
  data() {
    return {
      amount: 1
    }
  },
  methods: {
    euros(price) {
      return (price / 100).toFixed(2);
    },
    increase() {
      this.amount++;
    },
    decrease() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
    buy(amount) {
      alert(amount + " Kaufen");

      new SwaggerClient({ spec })
          .then(
              (client) => {
                client
                    .apis
                    .Beverage
                    .orderBeverage({}, {
                      requestBody: {
                        id_user: 1,
                        id_beverage: 1,
                        quantity: 1
                      }
                    })
                    .then(data => {
                      console.log(data.body)
                    });
              });
      this.$emit("buy");
    }
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
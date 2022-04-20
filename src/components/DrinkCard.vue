<template>
  <div class="my-3 p-3 bg-dark rounded shadow-sm" style="max-width: 18rem;">
    <h5 class="pb-2 mb-0">{{ beverage.name }}</h5>
    <h6 class="text-muted">{{ beverage.size / 1000 }} l</h6>
    <h6 >{{ this.euros }}€</h6>
  </div>
</template>

<script>
export default {
  name: "DrinkCard",
  props: ["beverage"],
  computed: {
    euros() {
      return (this.$props.beverage.price / 100).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
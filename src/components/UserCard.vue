<template>
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header" :class="{'text-success': credit >= 0, 'text-danger': credit < 0}">{{ euros }}€</div>
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ name }}</h5>
      <p class="card-text text-muted fst-italic" v-if="comment">{{ comment }}</p>
      <p class="card-text" v-else>&nbsp;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["credit", "name", "comment"],
  computed: {
    euros() {
      return (this.$props.credit / 100).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
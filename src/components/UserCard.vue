<template>
  <router-link :to="{name: 'Consume', params: {uid: id}}" style="text-decoration: none; color: inherit;">
    <div class="card text-white bg-dark mb-3 mx-auto shadow-sm" style="max-width: 18rem;">
      <div class="card-header" v-if="!isNaN(credit)" :class="{'text-success': credit >= 0, 'text-danger': credit < 0}">{{ euros }}€</div>
      <div class="card-header" v-else >&nbsp;</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ name }}</h5>
        <p class="card-text text-muted fst-italic" v-if="comment">{{ comment }}</p>
        <p class="card-text" v-else>&nbsp;</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UserCard",
  props: ["credit", "name", "comment", "id"],
  computed: {
    euros() {
      return (this.$props.credit / 100).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
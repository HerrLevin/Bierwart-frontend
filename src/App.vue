<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ appName }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-warning">Admin</button>
        </div>
      </div>
    </div>
  </nav>
  <router-view class="bg-black h-auto text-light p-3"></router-view>
</template>

<script>
export default {
  computed: {
    appName() {
      return process.env.VUE_APP_NAME;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

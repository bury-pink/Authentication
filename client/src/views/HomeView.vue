<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Home Page</p>
    <div class="isauth">{{ isAuth }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed: {
    isAuth() {
      return this.$store.state.isAuthenticated;
    }
  }
}
</script>

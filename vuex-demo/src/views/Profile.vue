<template>
  <div class="about">
    <h1>This is the profile page</h1>
    <p>name: {{name}}</p>
    <button v-on:click="logout()">logout</button>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
}
</script>

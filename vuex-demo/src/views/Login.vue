<template>
  <div class="about">
    <h1>This is the login page</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="name" v-model="name" /><br>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
    }
  },
  methods: {
    login() {
      console.log("login clicked");
      this.$store.commit("login", this.name);
      this.$router.push("profile");
    }
  }
}
</script>

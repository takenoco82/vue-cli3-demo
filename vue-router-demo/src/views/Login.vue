<template>
  <div class="about">
    <h1>This is the login page</h1>
    <button v-on:click="login()">login</button>
  </div>
</template>

<script>
export default {
    methods: {
        login() {
            console.debug("login clicked");
            sessionStorage.setItem("isLogin", true);
            this.$router.push("private");
        },
    }
}
</script>

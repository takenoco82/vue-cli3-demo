<template>
  <div class="about">
    <h1>This is the private page</h1>
    <button v-on:click="logout()">logout</button>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            console.debug("logout clicked");
            sessionStorage.removeItem("isLogin")
            this.$router.push("login");
        },
    }
}
</script>

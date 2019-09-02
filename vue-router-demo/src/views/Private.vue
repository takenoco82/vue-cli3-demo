<template>
  <div class="about">
    <h1>This is the private page</h1>
    <button v-on:click="logout()">logout</button>
    <button v-on:click="unauthorized()">401</button>
    <button v-on:click="internalServerError()">500</button>
  </div>
</template>

<script>
import { UnauthorizedError } from "../modules/exceptions";

export default {
  methods: {
    logout() {
      console.debug("logout clicked");
      sessionStorage.removeItem("isLogin")
      this.$router.push("login");
    },
    unauthorized() {
      throw new UnauthorizedError("401 Unauthorized");
    },
    internalServerError() {
      throw new Error("500 Internal Server Error");
    }
  }
}
</script>

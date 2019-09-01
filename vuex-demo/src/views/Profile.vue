<template>
  <div class="about">
    <h1>This is the profile page</h1>
    <p>name: {{name}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.name;
    }
  }
}
</script>

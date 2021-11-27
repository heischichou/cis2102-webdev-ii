<template>
  <header class="h-auto sticky-top bg-white border-bottom border-dark">
    <nav class="header p-4 d-flex justify-content-center fw-bold fs-4">
      <router-link to="/">Items</router-link> |
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header > * {
  padding: 0 1rem;
}

.header a {
  color: #000;
  transition: .3s;
}

.header a:hover {
  color: #0275d8;
}
</style>

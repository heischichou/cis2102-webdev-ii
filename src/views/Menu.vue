<template>
  <div class="menu m-5">
    <h1 class="mx-auto fw-bold mt-5 mb-0">Items</h1>
    <div class="vh-100 w-100 d-flex flex-wrap justify-content-evenly align-items-start">
      <template v-for="(item, i) in $store.state.items" :key="item.id">
        <template v-if="item.quantity != 0">
          <Card :key="i" :product="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Menu',
  components: {
    Card
  }
}
</script>

<style scoped>
</style>

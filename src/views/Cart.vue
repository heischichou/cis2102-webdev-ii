<template>
  <div class="cart vh-100">
    <div class="w-75 mx-auto mt-5 mb-0 d-flex">
      <h1 class="w-auto fw-bold">Cart</h1>
      <form @submit.prevent="checkout" class="w-100 d-flex flex-row justify-content-end align-items-end">
        <span class="mx-2"><h4>Due Total: &#8369;{{ total }}.00</h4></span>
        <input type="number" class="form-control form-control-lg mx-2" style="width: 20%" v-model="amount" min="0" placeholder="Payment Amount" required/>
        <input type="text" class="form-control form-control-lg mx-2" style="width: 15%" v-model="coupon" placeholder="Coupon Code"/>
        <button type="submit" class="btn btn-outline-dark fs-5 lh-base mx-2"><span class="ms-1 me-2 material-icons md-18 m-0">shopping_cart_checkout</span>Checkout</button>
      </form>
    </div>
    <div class="w-100">
      <template v-if="$store.state.cart.length == 0">
        <h1 class="fw-medium fst-italic text-muted position-absolute top-50 w-100">No items in your cart yet.</h1>
      </template>
      <template v-else>
        <div class="vh-100 w-100 d-flex flex-wrap justify-content-evenly align-items-start">
          <template v-for="item in $store.state.cart" :key="item.id">
          <Card :product="item"/>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Cart',
  components: {
    Card
  },
  data () {
    return {
      amount: 0,
      total: 0,
      coupon: ''
    }
  },
  mounted () {
    this.$store.state.cart.forEach(item => { this.total += (item.quantity * item.price) })
  },
  methods: {
    checkout () {
      this.total = 0
      this.$store.state.cart.forEach(item => { this.total += (item.quantity * item.price) })
      if (this.total !== 0) {
        if (this.amount >= this.total) {
          switch (this.coupon) {
            case 'menu50':
              this.total -= (this.total * 0.50)
              break
            case 'menu20':
              this.total -= (this.total * 0.20)
              break
            case 'menu10':
              this.total -= (this.total * 0.10)
              break
            case 'menu200flat':
              if (this.total > 1000) {
                this.total -= 200
              }
          }
          this.amount -= this.total
          this.total = 0
          this.$store.dispatch('CHECKOUT')
        } else {
          console.log('Insufficient balance!')
        }
      } else {
        console.log('You have no items in your cart!')
      }
    }
  },
  watch: {
    amount (data) {
      if (data < 0) {
        data = 0
        this.amount = data
      }
    },
    coupon (data) {
      this.coupon = data.trim()
    }
  }
}
</script>

<style scoped>
.card {
  width: 375px;
  margin: 4.5rem 6rem;
}

.card-thumbnail {
  height: 325px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

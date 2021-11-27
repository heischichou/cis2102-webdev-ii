<template>
  <div class="item">
    <div class="w-75 mx-auto d-flex mt-4 mb-0 border" style="height: 800px">
      <div class="thumbnail h-100 border-end" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
      <div class="d-block p-4 m-5">
        <h1 class="fw-bold">{{ item.name }}</h1>
        <div>
          <h5 class="fw-medium">Category</h5>
          <p>{{ item.category }}</p>
          <h5 class="fw-medium">Description</h5>
          <p>{{ item.description }}</p>
          <h5 class="fw-medium">Price</h5>
          <p>&#8369;{{ item.price }}.00</p>
        </div>
        <h5 class="fw-medium">Quantity</h5>
        <div class="input-group w-50">
          <button @click="subtract" class="btn btn-sm btn-outline-dark"><span class="lh-base material-icons">remove</span></button>
          <input type="number" class="form-control border-dark" min="0" :max="item.quantity" v-model="amount">
          <button @click="add" class="btn btn-sm btn-outline-dark"><span class="lh-base material-icons">add</span></button>
          <button @click="order" class="btn btn-primary mx-3">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Item',
  data () {
    return {
      item: {
        id: {
          type: Number,
          default: 0
        },
        name: {
          type: String,
          default: ''
        },
        price: {
          type: Number,
          default: 0.00
        },
        quantity: {
          type: Number,
          default: 0.00
        },
        category: {
          type: Array,
          default: []
        },
        img: {
          type: String,
          default: ''
        },
        description: {
          type: String,
          default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      },
      amount: 0,
      index: -1
    }
  },
  mounted () {
    this.item = {
      id: parseInt(this.$route.query.id),
      name: this.$route.query.name,
      price: parseInt(this.$route.query.price),
      quantity: parseInt(this.$route.query.quantity),
      category: this.$route.query.category,
      img: this.$route.query.img,
      description: this.$route.query.description
    }
    this.amount = this.item.quantity
    // this.index = this.$store.state.cart.findIndex(element => element.id === this.item.id)
    // if (this.index !== -1) {
    //   Object.assign(this.item, this.$store.state.cart[this.index])
    //   this.item.quantity = (this.amount -= this.item.quantity)
    // } else {
    //   this.index = this.$store.state.items.findIndex(element => element.id === this.item.id)
    //   Object.assign(this.item, this.$store.state.items[this.index])
    // }
  },
  methods: {
    add () {
      if (this.amount !== this.item.quantity) {
        this.amount++
      }
    },
    subtract () {
      if (this.amount !== 0) {
        this.amount--
      }
    },
    order () {
      var item = {}
      if (this.amount !== 0) {
        Object.assign(item, this.item)
        item.quantity = this.amount
        this.$store.dispatch('ADDTOCART', item)
        this.amount = this.item.quantity
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumbnail {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

p, h1, h2, h3, h4, h5, h6, span {
  text-align: justify;
}
</style>

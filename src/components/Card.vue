<template>
  <div class="card">
    <div class="card-thumbnail" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
    <div class="card-body border-top">
      <h3 class="card-title fw-semibold">{{ item.name }}</h3>
      <p class="card-text">&#8369;{{ item.price }}.00</p>
    </div>
    <div class="card-body border-top" v-if="$route.path == '/cart'">
      <label class="form-label"><h4 class="fw-semibold">Quantity</h4></label>
      <div class="input-group">
        <button class="btn btn-sm btn-outline-dark" @click="subtract"><span class="lh-base material-icons">remove</span></button>
        <input type="number" class="form-control border-dark" min="0" :max="item.quantity" v-model="amount">
        <button class="btn btn-sm btn-outline-dark" @click="add"><span class="lh-base material-icons">add</span></button>
      </div>
    </div>
    <div class="card-body border-top">
      <template v-if="$route.path == '/cart'">
        <router-link :to="{name:'Item', params:{path: product.name.toLowerCase()}, query:{id: temp.id, name: temp.name, price: temp.price, quantity: temp.quantity, category: temp.category, img: temp.img, description: item.description}}" class="btn btn-outline-primary">Details</router-link>
        <button class="btn btn-danger"  @click="remove">Remove</button>
      </template>
       <template v-else>
        <router-link :to="{name:'Item', params:{path: product.name.toLowerCase()}, query:{id: product.id, name: product.name, price: product.price, quantity: product.quantity, category: product.category, img: product.img, description: product.description}}" class="btn btn-outline-primary">Details</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: {
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
        default: ''
      }
    }
  },
  data () {
    return {
      item: {},
      temp: [],
      amount: 0
    }
  },
  mounted () {
    Object.assign(this.item, this.product)
    this.amount = this.item.quantity
    if (this.$route.path === '/cart') {
      const index = this.$store.state.items.findIndex(item => item.id === this.item.id)
      Object.assign(this.temp, this.$store.state.items[index])
    }
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
    remove () {
      this.$store.dispatch('REMOVE', this.item)
    }
  },
  watch: {
    amount (data) {
      if (this.$route.path === '/cart') {
        if (data < this.item.quantity && data >= 0) {
          var item = {}
          Object.assign(item, this.item)
          item.quantity = data
          this.$store.dispatch('UPDATEITEM', item)
        } else {
          this.amount = this.item.quantity
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      { id: 1, name: 'Bacon', price: 250, quantity: 10, category: ['Meat'], img: 'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg', description: 'A meat product traditionally produced from a cut of pork that is taken from the side (belly) or back of the hog. Bacon is processed by brining slabs of the meat, smoke curing it and then cuttting the slabs into strips for easier use for preparation. Strips of bacon can be cut and packaged as thin sliced, which yields up to 36 slices per pound, regular sliced, which yields about 16 to 20 slices per pound, or thick sliced, which yields about 12 to 16 slices per pound.' },
      { id: 2, name: 'Fish', price: 150, quantity: 5, category: ['Seafood', 'Fresh'], img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg', description: 'A cold-blooded, backboned, aquatic animal that lives in every region of the world. Fish are harvested for their highly nutritious meat and for the oil that is extracted and used as a food product or as an ingredient for a wide variety of commercially prepared products. There are numerous fresh water and salt-water fish species that are harvested throughout the world.' },
      { id: 3, name: 'Chicken', price: 200, quantity: 9, category: ['Poultry', 'Fresh'], img: 'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg', description: 'Chicken is the most common type of poultry in the world. Chicken can be prepared in a vast range of ways, including baking, grilling, barbecuing, frying, and boiling. Since the latter half of the 20th century, prepared chicken has become a staple of fast food. Chicken is sometimes cited as being more healthful than red meat, with lower concentrations of cholesterol and saturated fat.' },
      { id: 4, name: 'Beef', price: 300, quantity: 11, category: ['Meat'], img: 'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg', description: 'Beef is the culinary name for meat from cattle. Beef can be prepared in various ways; cuts are often used for steak, which can be cooked to varying degrees of doneness, while trimmings are often ground or minced, as found in most hamburgers.' },
      { id: 5, name: 'Soy Sauce', price: 50, quantity: 0, category: ['Sauce', 'Seasoning'], img: 'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024', description: 'Soy sauce (also called simply soy in American English and sometimes soya sauce in British English) is a liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds. It is considered to contain a strong umami flavor.' },
      { id: 9, name: 'Egg', price: 10, quantity: 72, category: ['Dairy'], img: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg', description: 'A food product produced from poultry that is used as both an ingredient and a main dish for baked foods. ggs can be cooked by boiling, poaching, frying, microwaving, or baking and they are one of the most common ingredients used for a variety of recipes.' },
      { id: 11, name: 'Pork', price: 200, quantity: 12, category: ['Meat'], img: 'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg', description: 'Pork is the culinary name for the meat of the domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork.Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork.' }
    ],
    cart: []
  },
  mutations: {
    addToCart (state, payload) {
      const index = state.cart.findIndex(item => item.id === payload.id)
      if (index !== -1) {
        state.cart[index].quantity += payload.quantity
      } else {
        state.cart.push(payload)
      }
    },
    updateItem (state, payload) {
      const index = state.cart.map(item => item.id).indexOf(payload.id)
      Object.assign(state.cart[index], payload)
    },
    remove (state, payload) {
      const index = state.cart.map(item => item.id).indexOf(payload.id)
      state.cart.splice(index, 1)
    },
    checkout (state) {
      state.cart.length = 0
    }
  },
  actions: {
    async ADDTOCART ({ commit }, payload) {
      commit('addToCart', await payload)
    },
    async REMOVE ({ commit }, payload) {
      commit('remove', await payload)
    },
    async UPDATEITEM ({ commit }, payload) {
      commit('updateItem', await payload)
    },
    CHECKOUT ({ commit }) {
      commit('checkout')
    }
  },
  getters: {
    getCart: state => state.cart
  }
})

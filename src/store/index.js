// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'lightTheme',
    products: [],
    cart: [],
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    },
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existing = state.cart.find(item => item.id === product.id);
      if (!existing) {
        state.cart.push({ ...product, quantity: 1 });
      } else {
        existing.quantity++;
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
  },
  actions: {
    fetchProducts({ commit }) {
      const dummyProducts = [
        {
          id: 1,
          name: 'Camera',
          price: 1000,
          category: 'Electronics',
          rating: 4,
          image: '/images/product1.jpg', 
          description: 'Nice Camera',
        },
        {
          id: 2,
          name: 'Head Phone',
          price: 200,
          category: 'Electronics',
          rating: 5,
          image: '/images/product2.jpg', 
          description: 'Nice Head Phone',
        },
        {
          id: 3,
          name: 'Books',
          price: 250,
          category: 'Books',
          rating: 5,
          image: '/images/product3.jpg', 
          description: 'Good Books for Writing',
        },
         {
          id: 4,
          name: 'Cloths',
          price: 500,
          category: 'Cloths',
          rating: 3,
          image: '/images/product4.jpg', 
          description: 'Nice Cloths for Womens',
        },
        
      ];
      commit('setProducts', dummyProducts);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

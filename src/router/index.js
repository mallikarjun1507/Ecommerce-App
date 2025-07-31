// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../pages/ProductList.vue';
import ProductDetails from '../pages/ProductDetails.vue';
import Cart from '../pages/CartPage.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/cart', component: Cart }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

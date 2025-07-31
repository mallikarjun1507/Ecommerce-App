<template>
  <v-container>
    <ProductFilter @filter="applyFilters" @search="searchProducts" />
    <v-row>
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="goToDetails(product.id)"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import ProductFilter from '../components/ProductFilter.vue';

export default {
  components: { ProductCard, ProductFilter },
  computed: mapState(['products']),
  data() {
    return {
      filteredProducts: [],
    };
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  watch: {
    products: {
      handler(newVal) {
        this.filteredProducts = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`/product/${id}`);
    },
    applyFilters(filters) {
      this.filteredProducts = this.products.filter(p =>
        (!filters.category || p.category === filters.category) &&
        (!filters.rating || p.rating >= filters.rating) &&
        (!filters.maxPrice || p.price <= filters.maxPrice)
      );
    },
    searchProducts(query) {
      const searchQuery = typeof query === 'string' ? query.toLowerCase() : '';
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(searchQuery)
      );
    },
  },
};
</script>

<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field label="Search" v-model="search" @input="$emit('search', search)" />
    </v-col>
    <v-col cols="12" sm="2">
      <v-select v-model="filter.category" :items="categories" label="Category" />
    </v-col>
    <v-col cols="12" sm="2">
      <v-select v-model="filter.rating" :items="ratings" label="Rating" />
    </v-col>
    <v-col cols="12" sm="2">
      <v-text-field v-model.number="filter.maxPrice" type="number" label="Max Price" />
    </v-col>
    <v-col cols="12">
      <v-btn @click="$emit('filter', filter)">Apply</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      filter: {
        category: null,
        rating: null,
        maxPrice: null,
      },
      categories: ['Books', 'Electronics', 'Cloths'],
      ratings: [1, 2, 3, 4, 5],
    };
  },
};
</script>

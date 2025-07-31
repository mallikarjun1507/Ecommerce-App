 
<template>
  <v-col cols="12" sm="6" md="4">
    <v-card @click="$emit('click')">
      
      <v-img :src="product.image" height="200px"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>
        ₹{{ product.price }} |  {{ product.rating }}
      </v-card-subtitle>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['product'],
};
</script>
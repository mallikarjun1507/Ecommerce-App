 <template>
  <v-container>
    <h1>{{ product.name }}</h1>
    <v-img :src="product.image" height="300px" />
    <p>{{ product.description }}</p>
    <p>Price: ₹{{ product.price }}</p>
    <p>Rating: {{ product.rating }}</p>
    <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['products']),
    product() {
      return this.products.find(p => p.id == this.$route.params.id);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product);
      this.$router.push('/cart');
    },
  },
};
</script>



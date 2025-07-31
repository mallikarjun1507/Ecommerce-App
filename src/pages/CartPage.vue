 <template>
  <v-container>
    <h1>Shopping Cart</h1>
    <v-list>
      <v-list-item v-for="item in cart" :key="item.id">
        {{ item.name }} - Qty: {{ item.quantity }} - ₹{{ item.price * item.quantity }}
        <v-btn icon color="red" @click="removeFromCart(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <h2>Total: ₹{{ cartTotal }}</h2>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal']),
  },
  methods: {
    removeFromCart(id) {
      this.$store.commit('removeFromCart', id);
    },
  },
};
</script>



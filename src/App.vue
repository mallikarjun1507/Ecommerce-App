<template>
  <v-app>
    <!-- Optional Top App Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>E-Commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/cart')">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <ThemeSwitcher />
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ThemeSwitcher from './components/ThemeSwitcher.vue';

export default {
  name: 'App',
  components: {
    ThemeSwitcher,
  },
};
</script>

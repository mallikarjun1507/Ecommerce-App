<!-- src/components/ThemeSwitcher.vue -->
<template>
  <v-btn
    icon
    @click="toggleTheme"
    :title="isDark ? 'Light Mode' : 'Dark Mode'"
  >
    <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.theme === 'darkTheme';
    }
  },
  methods: {
    toggleTheme() {
      const newTheme =
        this.$store.state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';

      this.$store.commit('toggleTheme');

      
      this.$vuetify.theme.global.name = newTheme;
    }
  }
};
</script>

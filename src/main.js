import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app');

//  Dynamically set Vuetify theme from Vuex state (Vuetify 3)
const selectedTheme = store.state.theme || 'lightTheme';
vuetify.theme.global.name.value = selectedTheme;

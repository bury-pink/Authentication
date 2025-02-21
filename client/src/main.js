import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://authentication-hxfo.onrender.com/api';
axios.defaults.withCredentials = true;

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app')


import axios from 'axios'


import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'

createApp(App).use(store).mount('#app')
createApp(App).config.globalProperties.$axios = axios
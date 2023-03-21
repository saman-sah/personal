import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";

createApp(App).use(router).use(VueAxios, axios).mount('#app')
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';




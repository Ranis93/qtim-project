import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// vue-awesome-paginate
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

createApp(App)
.use(router)
.use(VueAwesomePaginate)
.mount('#app')

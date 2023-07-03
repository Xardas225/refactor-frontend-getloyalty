import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

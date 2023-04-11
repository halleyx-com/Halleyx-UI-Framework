import { createApp } from 'vue'
import App from './App.vue'
// import hlxKit from 'halley-kit'
// import './registerServiceWorker'
import router from './router'
import './assets/icons/icon-style.css'
// import 'halley-kit/dist/library.mjs.css'
import store from './store'
// import {} from 'vue3-click-away'
const app = createApp(App)
app.use(store).use(router).mount('#app')

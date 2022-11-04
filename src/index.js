import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import NativeUI from 'naive-ui'


import App from './App.vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(NativeUI)
app.mount('#app')
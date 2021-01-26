import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const emitter = mitt()

createApp(App).mount('#app')

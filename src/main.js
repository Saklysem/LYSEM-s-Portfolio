import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
// import the fontawesome Icon Library
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// The Function to use the Fontawesome icon

createApp(App).mount('#app');


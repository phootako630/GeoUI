/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins';


const app = createApp(App)
// Set the Google Maps API key as a global variable


registerPlugins(app)

app.mount('#app')

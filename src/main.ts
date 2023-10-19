import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
import './assets/css/app.scss'
import App from './App.vue';

export function createApp() {
    const app = createSSRApp(App);
    const store = createPinia();
    app.use(store);

    return { app, store };
}

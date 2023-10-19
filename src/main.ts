import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
import App from './app.vue';

export function createApp() {
    const app = createSSRApp(App);
    const store = createPinia();
    app.use(store);

    return { app, store };
}

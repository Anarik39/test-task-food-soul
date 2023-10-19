import { createApp } from './main';
const { app, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.state.value = JSON.parse(JSON.stringify(window.__INITIAL_STATE__));
}

app.mount('#app');

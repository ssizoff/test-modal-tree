import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';
import { generateTree } from './tree';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './tree.css';

const store = createStore({
    state() {
        return {
            items: generateTree()
        }
    },
});

createApp(App).use(store).mount('#app');

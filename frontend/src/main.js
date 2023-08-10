import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from '@/router/router';
import components from '@/components/UI';
import App from './App';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(createPinia())
    .use(router)
    .mount('#app')



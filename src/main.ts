import { createApp } from "vue";
import box from "./pages/App.vue";
import store from './store';
import Button from 'ant-design-vue/lib/Button';
import 'ant-design-vue/dist/antd.less';

const app = createApp(box);
app.use(store).use(Button).mount('#app');
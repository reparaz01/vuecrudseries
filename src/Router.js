import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';


const myRoutes = [
    {
        path: "/", component: Home
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;
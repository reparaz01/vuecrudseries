import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Serie from './components/Serie.vue';
import Personajes from './components/Personajes.vue';
import CrearPersonaje from './components/CrearPersonaje.vue';
import ModificarPersonajes from './components/ModificarPersonajes.vue';

const myRoutes = [
    {
        path: "/", component: Home
    },
    {
        path: "/serie/:idserie", component: Serie
    },
    {
        path: "/personajes/:idserie/:nombreserie", component: Personajes
    },
    {
        path: "/crearpersonaje", component: CrearPersonaje
    },
    {
        path: "/modificarpersonajes", component: ModificarPersonajes
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;
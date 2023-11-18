import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Serie from './components/Serie.vue';
import Personajes from './components/Personajes.vue';
import CrearPersonaje from './components/CrearPersonaje.vue';
import ModificarPersonajes from './components/ModificarPersonajes.vue';
import Login from './components/Login.vue';
import EliminarPersonajes from './components/EliminarPersonajes.vue';


const myRoutes = [
    {
        path: "/", component: Home
    },
    {
        path: "/login", component: Login
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
    },
    {
        path: "/eliminarpersonajes", component: EliminarPersonajes
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;
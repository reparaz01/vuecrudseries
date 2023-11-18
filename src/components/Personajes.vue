<template>
  <div class="container py-4">
    <h2 class="mb-3">Personajes de la Serie: {{ $route.params.nombreserie }} &nbsp; 
      <router-link :to="'/serie/' + $route.params.idserie" class="btn btn-success">
        Volver
      </router-link>
    </h2>
    <div v-if="personajesCargados">
      <table class="table table-secondary table-bordered">
        <thead>
          <tr>
            <th class="align-middle text-center">Nombre</th>
            <th class="align-middle text-center">Foto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="personaje in personajes" :key="personaje.idPersonaje">
            <td class="align-middle text-center">{{ personaje.nombre }}</td>
            <td class="align-middle text-center">
              <img :src="personaje.imagen" :alt="personaje.nombre" style="max-width: 100px" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      Cargando...
    </div>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

/* eslint-disable */
export default {
  name: "Personajes",

  data() {
    return {
      personajes: [],
      personajesCargados: false,
    };
  },
  methods: {
    loadPersonajes() {
      const id = this.$route.params.idserie;
      
      service.getPersonajesSerieSeguro(id).then((result) => {
        this.personajes = result;
        this.personajesCargados = true;
      });
    },
  },

  mounted() {
    this.loadPersonajes();
  },
};
</script>

<style>
</style>

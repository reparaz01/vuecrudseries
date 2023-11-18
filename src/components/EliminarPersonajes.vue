<template>
  <div class="container py-4">
    <h1 class="text-center fw-bold mb-4">Eliminar Personajes</h1>

    <div class="mb-3">
      <label for="personaje" class="form-label">Selecciona un Personaje:</label>
      <select
        class="form-select input-narrow mx-auto"
        id="personaje"
        v-model="selectedPersonaje"
      >
        <option v-for="personaje in personajes" :key="personaje.idPersonaje" :value="personaje.idPersonaje">
          {{ personaje.nombre }}
        </option>
      </select>
    </div>


    <div class="text-center">
      <br/>
      <button @click.prevent="modificarPersonaje" class="btn btn-primary">
        Eliminar Personaje
      </button>
      &nbsp;
      <router-link to="/" class="btn btn-secondary">Volver</router-link>
    </div>
  </div>
</template>


<style>
.input-narrow {
  max-width: 480px; /* Ajusta el valor según tus necesidades */
}
</style>


<script>
import ServiceSeries from '../services/ServiceSeries';
const service = new ServiceSeries();

export default {
  name: "EliminarPersonajes",
  data() {
    return {
      selectedPersonaje: null,
      selectedSerie: null,
      personajes: [],
      series: [],
    };
  },
  methods: {
    modificarPersonaje() {
    if (this.selectedPersonaje) {
        service.deletePersonajeSeguro(this.selectedPersonaje)
            .then(() => {
                console.log("Personaje eliminado correctamente");
            })
            .catch(error => {
                console.error(error);
            });
    }
    this.$router.push("/");
},



    loadPersonajes() {
        service.getPersonajes().then(response => {
      this.personajes = response;
        });
    },


  },
  mounted() {
    this.loadPersonajes();


  },
};
</script>

<style>
.input-narrow {
  max-width: 480px; /* Ajusta el valor según tus necesidades */
}
</style>
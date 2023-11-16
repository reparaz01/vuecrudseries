<template>
  <div class="container py-4">
    <h1 class="text-center fw-bold mb-4">Modificar Personaje</h1>

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

    <div class="mb-3">
      <label for="serie" class="form-label">Selecciona una Serie:</label>
      <select
        class="form-select input-narrow mx-auto"
        id="serie"
        v-model="selectedSerie"
      >
        <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
    </div>

    <div class="text-center">
      <br/>
      <button @click.prevent="modificarPersonaje" class="btn btn-primary">
        Guardar Cambios
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
  name: "ModificarPersonajes",
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
    if (this.selectedPersonaje && this.selectedSerie) {
        service.updatePersonaje(this.selectedPersonaje, this.selectedSerie)
            .then(() => {
                console.log("Personaje editado correctamente");
            })
            .catch(error => {
                console.error(error);
            });
    }
    this.$router.push("/");
},


    loadSeries() {
        service.getSeries().then(response => {
      this.series = response;
        });
    },

    loadPersonajes() {
        service.getPersonajes().then(response => {
      this.personajes = response;
        });
    },


  },
  mounted() {
    this.loadSeries();
    this.loadPersonajes();


  },
};
</script>

<style>
.input-narrow {
  max-width: 480px; /* Ajusta el valor según tus necesidades */
}
</style>
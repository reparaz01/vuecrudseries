<template>
  <div class="container py-4">
    <h1 class="text-center fw-bold mb-4">Crear Personaje</h1>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control input-narrow mx-auto"
        id="nombre"
        v-model="personaje.nombre"
      />
    </div>
    <div class="mb-3">
      <label for="imagen" class="form-label">Imagen</label>
      <input
        type="text"
        class="form-control input-narrow mx-auto"
        id="imagen"
        v-model="personaje.imagen"
      />
    </div>
    <div class="mb-3">
      <label for="serie" class="form-label">Serie</label>
      <select
        class="form-select input-narrow mx-auto"
        id="serie"
        v-model="personaje.idSerie"
      >
        <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
    </div>
    <div class="text-center">
      <br />
      <button @click.prevent="crearPersonaje" class="btn btn-primary">
        Crear Personaje
      </button>
      &nbsp;
      <router-link to="/" class="btn btn-secondary">Volver</router-link>
    </div>
  </div>
</template>


<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
  name: "CrearPersonaje",
  methods: {
    crearPersonaje() {
      service.crearPersonaje(this.personaje).then(result => {
        console.log(result);
        console.log(this.personaje);
        this.$router.push("/");
      });
    },
    loadSeries() {
      service.getSeries().then(response => {
        this.series = response;
      });
    },
  },
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: null
      },
      series: [],
      mensaje: ""
    };
  },
  mounted() {
    this.loadSeries();
  },
};
</script>

<style>
.input-narrow {
  max-width: 480px; /* Ajusta el valor según tus necesidades */
}
</style>
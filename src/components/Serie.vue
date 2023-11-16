<template>
  <div v-if="serieCargada" class="container mt-5 d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <img
            :src="serie.imagen"
            class="card-img-top"
            :alt="serie.nombre"
            style="max-width: 600px"
          />
          <div class="card-body text-center">
            <br />
            <h5 class="card-title">{{ serie.nombre }}</h5>
            <p class="card-text">IMBD: {{ serie.puntuacion }}</p>
            <div class="container">
              <div class="row">
                <div class="text-center">
                  <br />
                  <router-link
                    :to="'/personajes/' + serie.idSerie + '/' + serie.nombre"
                    class="btn btn-primary"
                  >
                    Ver Personajes
                  </router-link>
                  &nbsp;
                  <router-link to="/" class="btn btn-secondary">Volver</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Cargando...
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

/* eslint-disable */
export default {
  name: "Serie",
  data() {
    return {
      serie: null,
      serieCargada: false,
      previousRoute: null,
    };
  },
  methods: {
    loadSerie() {
      const id = this.$route.params.idserie;

      service.detallesSerie(id).then((result) => {
        this.serie = result;
        this.serieCargada = true;
      });
    },
  },
  updated() {
    const currentRoute = this.$route.fullPath;

    if (currentRoute !== this.previousRoute) {
      this.previousRoute = currentRoute;
      this.serieCargada = false; // Reinicia la carga
      this.loadSerie(); // Carga la nueva serie
    }
  },
  mounted() {
    this.loadSerie();
  },
};
</script>

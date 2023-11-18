<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/logo.png" width="50" height="50" alt="Logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/login">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/crearpersonaje">
                Nuevo Personaje
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/modificarpersonajes">
                Modificar Personajes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/eliminarpersonajes">
                Eliminar Personajes
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="fetchSeries"
              >
                Series
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li v-for="serie in series" :key="serie.idSerie">
                  <router-link :to="'/serie/' + serie.idSerie" class="dropdown-item">
                    {{ serie.nombre }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const serviceSeries = new ServiceSeries();

export default {
  name: "MenuSeries",
  data() {
    return {
      series: []
    };
  },
  methods: {
    fetchSeries() {

      serviceSeries.getSeries().then((result) => {
        this.series = result;
      });
    }
  }
};
</script>

<template>
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src= "../assets/images/logo.png" width="50" height="50" alt="Logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/nuevopersonaje">
                    Nuevo Personaje
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/modificarpersonajes">
                    Modificar Personajes
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    {seriesDropdownItems}
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

export default {
  name: "MenuSeries",
  data() {
    return {
      series: []
    };
  },
  methods: {
    fetchSeries() {
      const serviceSeries = new ServiceSeries();
      serviceSeries.getSeries().then((result) => {
        this.series = result;
      });
    }
  }
};
</script>
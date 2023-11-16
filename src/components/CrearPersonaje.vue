<template>
  <div className="container py-4">
          <h1 className="text-center fw-bold mb-4">Crear Personaje</h1>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              ref={this.cajaNombre}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              ref={this.cajaImagen}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="serie" className="form-label">Serie</label>
            <select
              className="form-select"
              id="serie"
              ref={this.cajaSerie}
            >
              {this.state.series.map(serie => (
                <option key={serie.idSerie} value={serie.idSerie}>
                  {serie.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <br></br>
            <button onClick={v-on:submit.prevent="crearPersonaje()"} className="btn btn-primary btn-lg" style={customButtonStyle} alert="Personaje creado correctamente">
              Crear Personaje
            </button> &nbsp;
            <NavLink to={"/personajes"} className="btn btn-secondary">Volver</NavLink>
          </div>
        </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();


    export default {
        name: "CrearPersonaje",
        methods:{
            crearPersonaje() {
                service.crearCoche(this.coche).then(result => {
                    console.log(result);
                    this.$router.push("/");
                    //this.mensaje = "Insertado correctamente";
                });
            }
        },
        data() {
            return {
                personaje: {
                     idPersonaje: null,
                     nombre: "",
                     imagen: "",
                     idSerie : null

                }, 
                mensaje: ""
            }
        }
    }
</script>

<style>

</style>
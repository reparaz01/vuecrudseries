import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries {

// METODO PARA AUTORIZAR ACCECSO

    autorizarAcceso(username, password) {
        const json = {
            "userName": username,
            "password": password
        };
    
        const headers = {
            'Content-Type': 'application/json',
        };
    
        const request = 'auth/login';
        const url = Global.urlApi + request;
    
        return axios.post(url, json, { headers })
            .then(response => {
                Global.token = response.data.response;
                return response; // Puedes devolver la respuesta si es necesario
            })
            .catch(error => {
                console.error("Error en la solicitud HTTP:", error);
                throw error; // Rethrow the error to propagate it to the next catch block
            });
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getSeries() {
        return new Promise(function(resolve) {
            var request = "api/Series";
            var series = [];
            var url = Global.urlApi + request;
            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })
        })
    }

    getSeriesSeguro() {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
            var request = "api/Series";
            var url = Global.urlApi + request;
  
          return axios.get(url, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al obtener Series:", error);
            });
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getPersonajes() {
        return new Promise(function(resolve) {
            var request = "api/Personajes";
            var personajes = [];
            var url = Global.urlApi + request;
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    getPersonajesSeguro() {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Personajes";
          var url = Global.urlApi + request;
  
          return axios.get(url, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al obtener Personajes:", error);
            });

    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getPersonajesSerieDificil(id) {
        return new Promise(function(resolve) {
            const request = "api/personajes";
            const url = Global.urlApi + request;
          
            axios.get(url).then(response => {
                const personajes = response.data;
                const personajesSerie = [];
          
                for (let i = 0; i < personajes.length; i++) {
                  if (personajes[i].idSerie == id) {
                    personajesSerie.push(personajes[i]);
                  }
                }

                console.log(personajesSerie.length);

            resolve(personajesSerie);
          });
        });
      }


    getPersonajesSerie(id) {
        return new Promise(function(resolve) {
            const request = "api/series/personajesserie/" + id;
            const url = Global.urlApi + request;
            var personajes = [];
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
          });
        });
      }


      getPersonajesSerieSeguro(id) {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          
            const request = "api/series/personajesserie/" + id;
            const url = Global.urlApi + request;

          return axios.get(url, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al obtener Personajes de la Serie:", error);
            });

      }
      
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    crearPersonaje(personaje){
        return new Promise(function(resolve) {
            var request = "api/personajes";
            var url = Global.urlApi + request;
            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

    crearPersonajeSeguro(personaje){

        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };

          var request = "api/personajes";
          var url = Global.urlApi + request;
  
          return axios.post(url, personaje, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al crear el Personaje:", error);
            });

    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    detallesSerie(id) {
        return new Promise(function(resolve){
            var request = "api/Series/" + id;
            var url = Global.urlApi + request;
            var serie = {};
            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })
        })
    }


    detallesSerieSeguro(id) {
        const headers = {
          'Authorization': 'bearer ' + Global.token,
        };
        var request = "api/Series/" + id;
        var url = Global.urlApi + request;

        return axios.get(url, { headers })
          .then(response => response.data)
          .catch(error => {
            console.error("Error al obtener detalles de serie:", error);
          });
      }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
      

    updatePersonaje(idPersonaje, idSerie) {
        return new Promise(function(resolve) {
            const url = Global.urlApi + 'api/personajes/' + idPersonaje + "/" + idSerie;
            axios.put(url).then(() => {
                resolve();
            });
        });
    }

    updatePersonajeSeguro(idPersonaje, idSerie) {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };

        const url = Global.urlApi + 'api/personajes/' + idPersonaje + "/" + idSerie;
  
          return axios.put(url, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al Modificar Personaje:", error);
            });
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    

    deletePersonajeSeguro(id) {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };

        const url = Global.urlApi + "api/personajes/" + id;
  
          return axios.delete(url, { headers })
            .then(response => response.data)
            .catch(error => {
              console.error("Error al Eliminar Personaje:", error);
            });
    }

}
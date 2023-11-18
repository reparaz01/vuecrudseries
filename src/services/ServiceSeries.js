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
      return new Promise(function(resolve) {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Series";
          var series = [];
          var url = Global.urlApi + request;
          axios.get(url, { headers }).then(response => {
              series = response.data;
              resolve(series);
          })
        })

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
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Personajes";
          var personajes = [];
          var url = Global.urlApi + request;
          axios.get(url, { headers }).then(response => {
              personajes = response.data;
              resolve(personajes);
          })
      })

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
          return new Promise(function(resolve) {
            const headers = {
              'Authorization': 'bearer ' + Global.token,
            };
            const request = "api/series/personajesserie/" + id;
            const url = Global.urlApi + request;
            var personajes = [];
            axios.get(url, { headers }).then(response => {
                personajes = response.data;
                resolve(personajes);
          });
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
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/personajes";
          var url = Global.urlApi + request;
          axios.post(url, personaje, { headers }).then(response => {
              resolve(response);
          })
      })

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
        return new Promise(function(resolve){
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Series/" + id;
          var url = Global.urlApi + request;
          var serie = {};
          axios.get(url, { headers }).then(response => {
              serie = response.data;
              resolve(serie);
          })
      })

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
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          const url = Global.urlApi + 'api/personajes/' + idPersonaje + "/" + idSerie;
          axios.put(url, { headers }).then(() => {
              resolve();
          });
      });

    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    

    deletePersonajeSeguro(id) {
      return new Promise(function(resolve){
        const headers = {
          'Authorization': 'bearer ' + Global.token,
        };
        var request = "api/personajes/" + id;
        var url = Global.urlApi + request;
        axios.delete(url, { headers }).then(response =>  {
            resolve(response);
        })
    })
    }

}
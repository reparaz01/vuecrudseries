import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries {
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
      


    crearPersonaje(personaje){
        return new Promise(function(resolve) {
            var request = "api/personajes";
            var url = Global.urlApiCoches + request;
            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

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

    updateCoche(coche) {
        return new Promise(function(resolve){
            var request = "api/coches/updatecoche";
            var url = Global.urlApiCoches + request;
            axios.put(url, coche).then(response =>  {
                resolve(response);
            })
        })
    }

    deleteCoche(id) {
        return new Promise(function(resolve){
            var request = "api/coches/deletecoche/" + id;
            var url = Global.urlApiCoches + request;
            axios.delete(url).then(response =>  {
                resolve(response);
            })
        })
    }

}
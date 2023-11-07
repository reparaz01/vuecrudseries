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

    crearCoche(coche){
        return new Promise(function(resolve) {
            var request = "api/coches/insertcoche";
            var url = Global.urlApiCoches + request;
            axios.post(url, coche).then(response => {
                resolve(response);
            })
        })
    }

    detallesCoche(id) {
        return new Promise(function(resolve){
            var request = "api/coches/findcoche/" + id;
            var url = Global.urlApiCoches + request;
            var coche = {};
            axios.get(url).then(response => {
                coche = response.data;
                resolve(coche);
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
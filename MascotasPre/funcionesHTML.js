var general;
(function (general) {
    window.onload = function () {
        document.getElementById("btnGuardar").addEventListener("click", guardar);
        document.getElementById("search_input").addEventListener("keyup", searchByName);
        document.getElementById("mascota").addEventListener("change", contenedorTipo);
    };
    var listMascotas = new Array();
    var tipe;
    function guardar() {
        var inputNombbre = document.getElementById("name");
        tipe = document.getElementById("mascota");
        var miNombre = inputNombbre.value;
        var miPerro;
        var miGato;
        var miPajaro;
        switch (tipe.value) {
            case "Perro": {
                var raza = document.getElementById("razaPerro");
                miPerro = new general.Perro(miNombre, raza.value);
                listMascotas.push(miPerro);
                armarGrilla(listMascotas);
                //agregar a la tabla
                break;
            }
            case "Gato": {
                var vidas = document.getElementById("vidasGato");
                miGato = new general.Gato(miNombre, parseInt(vidas.value));
                listMascotas.push(miGato);
                armarGrilla(listMascotas);
                break;
            }
            case "Pajaro": {
                var tipoPajaro = document.getElementById("tipoPajaro");
                miPajaro = new general.Pajaro(miNombre, parseInt(tipoPajaro.value));
                listMascotas.push(miPajaro);
                armarGrilla(listMascotas);
                break;
            }
        }
    }
    general.guardar = guardar;
    function contenedorTipo() {
        tipe = document.getElementById("mascota");
        switch (tipe.value) {
            case "Perro": {
                document.getElementById("contenedorGato").hidden = true;
                document.getElementById("contenedorPerro").hidden = false;
                document.getElementById("contenedorPajaro").hidden = true;
                break;
            }
            case "Gato": {
                document.getElementById("contenedorGato").hidden = false;
                document.getElementById("contenedorPerro").hidden = true;
                document.getElementById("contenedorPajaro").hidden = true;
                break;
            }
            case "Pajaro": {
                document.getElementById("contenedorGato").hidden = true;
                document.getElementById("contenedorPerro").hidden = true;
                document.getElementById("contenedorPajaro").hidden = false;
                break;
            }
            default: {
                document.getElementById("contenedorGato").hidden = true;
                document.getElementById("contenedorPerro").hidden = true;
                document.getElementById("contenedorPajaro").hidden = true;
            }
        }
    }
    general.contenedorTipo = contenedorTipo;
    function agregarObjeto(objeto) {
        var tCuerpo = document.getElementById("tCuerpo");
        var tr = document.createElement("tr");
        //Agrega una row
        var td = document.createElement("td");
        var nodoTexto1 = document.createTextNode(objeto.nombre);
        td.appendChild(nodoTexto1);
        tr.appendChild(td); //agrego la row a la tabla 
        if (objeto instanceof general.Perro) {
            var td2 = document.createElement("td");
            var nodoTexto2 = document.createTextNode(objeto.getRaza());
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }
        else if (objeto instanceof general.Gato) {
            var td2 = document.createElement("td");
            var nodoTexto2 = document.createTextNode(objeto.getVidas().toString());
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }
        else if (objeto instanceof general.Pajaro) {
            var td2 = document.createElement("td");
            var nodoTexto2 = document.createTextNode(general.ETipo[objeto.getTipo()]);
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }
        //tr.addEventListener("dblclick",clickGrilla);
        tCuerpo.appendChild(tr);
    }
    general.agregarObjeto = agregarObjeto;
    function armarGrilla(obj) {
        document.getElementById("tCuerpo").innerHTML = "";
        for (var i = 0; i < obj.length; i++) {
            agregarObjeto(obj[i]);
        }
    }
    general.armarGrilla = armarGrilla;
    function searchByName() {
        var listFilt = new Array();
        var searchInput = document.getElementById("search_input");
        var valor = searchInput.value.toLowerCase();
        // listFilt= listMascotas.filter(mascota=>{
        //     if(mascota.getNombre().includes(valor))
        //     {
        //         return mascota;
        //     }       
        // });
        // listFilt=listMascotas.filter(mascota => mascota.getNombre().toLowerCase().includes(valor));
        listFilt = listMascotas.filter(function (mascota) { return mascota.getNombre().toLowerCase().indexOf(valor) > -1; });
        armarGrilla(listFilt);
    }
    general.searchByName = searchByName;
})(general || (general = {}));

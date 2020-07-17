namespace general{

    window.onload=function(){
        document.getElementById("btnGuardar").addEventListener("click",guardar);
        document.getElementById("search_input").addEventListener("keyup",searchByName);
        document.getElementById("mascota").addEventListener("change",contenedorTipo);
    };
    var listMascotas:Array<Mascota> = new Array<Mascota>();
    var tipe;

    export function guardar(){

        var inputNombbre=<HTMLInputElement>document.getElementById("name");
        tipe = <HTMLInputElement>document.getElementById("mascota");
        var miNombre:string=inputNombbre.value;
        var miPerro:Perro ;
        var miGato:Gato;
        var miPajaro:Pajaro;

        switch(tipe.value){
            case "Perro":{
                let raza=<HTMLInputElement>document.getElementById("razaPerro");
                miPerro=new Perro(miNombre,raza.value);
                listMascotas.push(miPerro);
                armarGrilla(listMascotas);
                //agregar a la tabla
                break;
            }
            case "Gato":{                
                let vidas=<HTMLInputElement>document.getElementById("vidasGato");
                miGato=new Gato(miNombre,parseInt(vidas.value));
                listMascotas.push(miGato);
                armarGrilla(listMascotas);
                break;
            }
            case  "Pajaro":{
                let tipoPajaro=<HTMLInputElement>document.getElementById("tipoPajaro");
                miPajaro=new Pajaro(miNombre,parseInt(tipoPajaro.value));
                listMascotas.push(miPajaro);
                armarGrilla(listMascotas);
                break;
            }
        }

    }

    export function contenedorTipo(){
        tipe = <HTMLInputElement>document.getElementById("mascota");
        switch(tipe.value){
            case "Perro":{
                document.getElementById("contenedorGato").hidden=true;
                document.getElementById("contenedorPerro").hidden=false;
                document.getElementById("contenedorPajaro").hidden=true;
                break;
            }
            case "Gato":{                
              document.getElementById("contenedorGato").hidden=false;
              document.getElementById("contenedorPerro").hidden=true;
              document.getElementById("contenedorPajaro").hidden=true;
                break;
            }
            case  "Pajaro":{
                document.getElementById("contenedorGato").hidden=true;
                document.getElementById("contenedorPerro").hidden=true;
                document.getElementById("contenedorPajaro").hidden=false;
                break;
            }
            default :{
                
                document.getElementById("contenedorGato").hidden=true;
                document.getElementById("contenedorPerro").hidden=true;
                document.getElementById("contenedorPajaro").hidden=true;
            }
        }
    }
    export function agregarObjeto(objeto){
        
        var tCuerpo = document.getElementById("tCuerpo");
        
        var tr =document.createElement("tr");
        //Agrega una row
        var td =document.createElement("td");
        var nodoTexto1 = document.createTextNode(objeto.nombre);
        td.appendChild(nodoTexto1);
        tr.appendChild(td); //agrego la row a la tabla 
         
        if(objeto instanceof Perro)
        {
            var td2 =document.createElement("td");
            var nodoTexto2 = document.createTextNode(objeto.getRaza());
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }else if(objeto instanceof Gato){
            var td2 =document.createElement("td");
            var nodoTexto2 = document.createTextNode(objeto.getVidas().toString());
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }else if(objeto instanceof Pajaro){
            var td2 =document.createElement("td");
            var nodoTexto2 = document.createTextNode(ETipo[objeto.getTipo()]);
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2); //agrego la row a la tabla 
        }
   
        //tr.addEventListener("dblclick",clickGrilla);
        tCuerpo.appendChild(tr);
    }

    export function armarGrilla(obj){
        document.getElementById("tCuerpo").innerHTML="";
        for(var i=0;i<obj.length;i++){
            agregarObjeto(obj[i])
        }
    }
    export function searchByName(){
        var listFilt:Array<Mascota> = new Array<Mascota>();
        var searchInput = <HTMLInputElement>document.getElementById("search_input");
        var valor = searchInput.value.toLowerCase();
        // listFilt= listMascotas.filter(mascota=>{
        //     if(mascota.getNombre().includes(valor))
        //     {
        //         return mascota;
        //     }       
        // });
        // listFilt=listMascotas.filter(mascota => mascota.getNombre().toLowerCase().includes(valor));
        listFilt=listMascotas.filter(mascota =>mascota.getNombre().toLowerCase().indexOf(valor) > -1);
        armarGrilla(listFilt);

        
            
    }
}
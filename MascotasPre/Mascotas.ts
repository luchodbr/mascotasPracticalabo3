namespace general{

    export class Mascota
    {
        private nombre: string;
        
        constructor(nombre:string){
            this.nombre=nombre;

        }

        public getNombre():string{  
            return this.nombre;

        }   
        
        public setNombre(nombre:string){  
            this.nombre=nombre;

        }
    
    }


}
namespace general{
    export class Gato extends Mascota{
        private cantVidas:number=9;

        constructor(nombre:string, cantVidas:number){
            super(nombre);
            this.cantVidas=cantVidas;
        }

        public getVidas():number{  
            return this.cantVidas;

        }   
        
        public setVidas(vidas:number){  
            this.cantVidas=vidas;

        }
    }
}
namespace general{
    export enum ETipo
    {Rapiña = 0,Loro =1

    }
    export class Pajaro extends Mascota{
        private tipo:ETipo;
        constructor(nombre:string,tipo:number){
            super(nombre);
            this.tipo=tipo;
        }

        public getTipo():ETipo{  
            return this.tipo;

        }   
        
        public setTipo(tipo:ETipo){  
            this.tipo=tipo; 

        } 
    }
}
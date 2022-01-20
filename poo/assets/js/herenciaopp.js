class Pokemon{
    constructor(nombre,tipo,vida){
        this.nombre=nombre;
        this.tipo=tipo;
        this.vida=vida;
    }
    getDano(carga){
        this.carga=carga;
        let nuevaVida = this.vida-carga;
        return nuevaVida;
    }

    getNombre(){
        return this.nombre;
    }
    setVida(vida){
        this.vida=vida;
        return vida;
    }

}

class Pikachu extends Pokemon{
    constructor(nombre,tipo,vida,carga){
        super(nombre,tipo);
        this.carga=carga;
        this.vida=vida;
    }

    setCarga(carga){
        this.carga=carga;
        return carga;
    }

    getCarga(){
        return this.carga;
    }

    getVida(){
        return this.vida;

    }
    
}

const Pikachu1 = new Pikachu("Pedro","Electrico",500,12);
const Pikachu2 = new Pikachu("Juan","Electrico",300,17);





console.log(Pikachu1.getDano(Pikachu2.getCarga()));
Pikachu1.setVida();

console.log(Pikachu1.getVida(Pikachu1.getDano(Pikachu2.getCarga())));
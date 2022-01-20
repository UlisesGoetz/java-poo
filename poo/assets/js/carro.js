/*Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
*/
class Carro{
    //constructor es una funcion
    constructor(marca, color, modelo, velocidad, puertas){
        this.puertas=puertas;
        this.color = color;
        this.marca=marca;
        this.modelo = modelo;
        this.velocidad = velocidad;


    }
//metodo
    toString(){
        return "Color: "+this.color+" marca: "+this.marca+" Modelo: "+this.modelo+" velociad: "+this.velocidad
    }


    acelerar(){

        return this.velocidad ++;

    }


    reversa(){
        return this.velocidad --;
    }



    velocidad(){
        return this.velocidad;
    }

    frenar(){
        return this.velocidad=0;
    } 

}

const Carro1 = new Carro ("a","b","c",10,4);

//Lo ejecuto desde la consola nodejs
console.log(Carro1.toString());
class Animal{
    //constructor es una funcion
    constructor(nombre, especie){
        this.nombre=nombre;
        this.especie = especie;

    }
//metodo
    presentarse(){
        document.write(`Hola soy ${this.nombre} <br>`)
    }
    setNombre(nombreNuevo){
        return this.nombre=nombreNuevo;


    }

    getNombre(){
        return this.nombre;
    }

    //Clases estaticas
    static saludo(){
       return  document.write(`Hola soy una funcion estatica <br> `)
    }
}

Animal.saludo();

const Animal1 = new Animal("Scooby","Perro");  //Creamos un objeto

const Animal2 = new Animal("Pecas","Gato");

console.log(Animal2,Animal1);

Animal1.presentarse();

Animal1.setNombre("nuevo Scooby");

console.log(Animal1.getNombre());
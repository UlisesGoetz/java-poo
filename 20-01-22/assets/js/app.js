class Animal{
    constructor(nombre,edad,especie,revisado){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.vivo=true;
        this.revisado=revisado;

    }
    saludar(){
        return (`Hola mi nombre es ${this.nombre} como estas? :)) `);
    }
    setEnfermo(enfermo){
        this.enfermo=enfermo;
    }
    getNombre(){
        return this.nombre;
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes ++;
        return  `PAciente agregado <br> ${this.cantidadPacientes}`;
    }
    mostrarLista(){
        for (let i = 0; i < this.listaPacientes.length; i++)  
          console.log("El nombre es "+this.listaPacientes[i].nombre +" Esta revisado: "+ this.listaPacientes[i].revisado);
        }
        revisarPaciente(paciente){
            if(paciente.revisado==false){
                paciente.revisado= true;
                this.pacientesRevisados ++;
                return "Paciente revisado"
            }else{
                return "este paciente ya se reviso";
            }
        }
    }



const Animal1 = new Animal("Manchas",5,"Perro",false);
console.log(Animal1.saludar());

const Veterinario1 = new Veterinario ();
console.log(Veterinario1.agregarPaciente(Animal1));
console.log(Veterinario1.mostrarLista());
console.log(Veterinario1.revisarPaciente(Animal1));
console.log(Veterinario1.mostrarLista());

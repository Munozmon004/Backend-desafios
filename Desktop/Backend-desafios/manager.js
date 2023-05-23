const fs = require('fs');
const { Agent } = require('http');

class ManagerUsuarios {

    #usuarios;
    #file;

    constructor(){
        this.#usuarios = [];
        this.#file = 'usarios.json'
   }
    cargarArchivo(){
      if(fs.existsSync(this.#file)){
        // cargar la data que ya existe en el file en una variable
        const dataUsuarios = fs.readFileSync(this.#file, 'utf-8');
        this.#usuarios = JSON.parse(dataUsuarios);
    }else{
        // crear el archivo
        const data = JSON.stringify()
        fs.writeFileSync(this.#file, data)
    }
   }

    crearUsuario(usuario){

        this.#usuarios.push(this.#usuario)
        const data = JSON.stringify(this.#usuarios);
        fs.writeFileSync(this.#file,this.#usuarios)
    }

    consultarUsuarios(){
        console.log(this.#usuarios);
    }
}

const user = new ManagerUsuarios();

const estudiante1 = {
    nombre: 'Monse',
    lastname: 'Munoz',
    age: '20',
    curse: 'backend'
}

user.crearUsuario(estudiante1)
user.consultarUsuarios()


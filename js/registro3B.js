registro = [{
    nombre: "",
    usuario: "",
    password: "",
    telefono: "",
    direccion: "",
    correo: ""
}]

function buscarDominio(arreglo){
    args = [];
    //console.log(arreglo);
    //console.log(typeof arreglo);

    for(var i = 0; i<arreglo.length; i++){

        if(arreglo[i].campoCorreo.split("@")[1] == "upb.edu.co"){
        
        args.push(arreglo);

        console.log(args);

        }
        return args;
    }
    
}

//buscarDominio(arreglo);
//console.log(args);

function retornarCuenta(args){

    var ocurrencias = 0; 

    for (var i= 0; i<args.length; i++){

        console.log(typeof campoNombre)
        if(args[i].campoNombre.include("a")){
            
            if((args[i].campoTelefono.endsWith("0")) || (args[i].campoTelefono.endsWith("4"))){
                
                ocurrencias ++;
                console.log(ocurrencias);
            }

        }
        return ocurrencias; 
    }
}   
//retornarCuenta(args);

module.exports.registro = registro;
module.exports.buscarDominio = buscarDominio();
module.exports.retornarCuenta = retornarCuenta();
<<<<<<< HEAD
var registros = [{
    nombre: "",
    usuario: "",
    password: "",
    telefono: "",
    direccion: "",
    correo: ""
}]

function buscarDominio(arreglo){
    var arregloDominios = [];
    for(index in arreglo){
        if(arreglo[index]["correo"].includes('@upb.edu.co')){
            arregloDominios.push(arreglo[index]);
=======

var campoCorreo = "";
var campoNombre = "";
var campoTelefono = "";
var arreglo = [];
var args = [];


//var formulario = document.getElementById("formRegistro");

function registros (){
    var datos = {
        campoCorreo: campoCorreo,
        campoNombre: campoNombre,
        campoTelefono: campoTelefono,
    };

    arreglo.push(datos);
    console.log(arreglo);
}

//registro();
//console.log(arreglo);


function buscarDominio(arreglo){
    
    console.log(arreglo);
    console.log(typeof arreglo);

    for(var i = 0; i<arreglo.length; i++){

        if(arreglo[i].campoCorreo.split("@")[1] == "upb.edu.co"){
        
        args.push(arreglo);

        console.log(args);

>>>>>>> origin/main
        }
        return args;
    }
<<<<<<< HEAD
    return arregloDominios;    
=======
    
>>>>>>> origin/main
}

//buscarDominio(arreglo);
//console.log(args);

function retornarCuenta(args){
<<<<<<< HEAD
    var ocurrencias = 0;
    for(index in args){
        if(args[index]["nombre"].includes('a')){
            console.log("El nombre tiene 'a");
            if(args[index]["telefono"].endsWith('4') || args[index]["telefono"].endsWith('0')){
                console.log("El telefono termina en '4' o en '0'");
                ocurrencias++;
            }
        } 
    }
    return ocurrencias;    
}                         
            
            
module.exports.registros = registros;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;
=======

    var ocurrencias = 0; 

    for (var i= 0; i<args.length; i++){

        args = args[i]

        console.log(typeof campoNombre)
        if(campoNombre.startsWith("a")){
            
            if(campoTelefono.endsWith("0") || campoTelefono.endsWith("4")){
                
                ocurrencias ++;
                console.log(ocurrencias);
            }

        }
        return ocurrencias; 
    }
}   
//retornarCuenta(args);


module.exports.registro = registros();
module.exports.buscarDominio = buscarDominio();
module.exports.retornarCuenta = retornarCuenta();
>>>>>>> origin/main

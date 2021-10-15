console.log("conectado")

var registros = [{
    nombre: "",
    usuario: "",
    password: "",
    telefono: "",
    direccion: "",
    correo: ""
}]

var arreglo1 = [
    {
    nombre: "Rafael",
    usuario: "rafa",
    password: "1234",
    telefono: "4567890",
    direccion: "Calle 2",
    correo: "rafa@upb.edu.co"
    },
    {
    nombre: "Sofia",
    usuario: "sofi",
    password: "4321",
    telefono: "3004958",
    direccion: "Calle 2",
    correo: "sofi@iue.edu.co"
    },
    {
    nombre: "Yuri",
    usuario: "yuri",
    password: "9876",
    telefono: "4536478",
    direccion: "Calle 2",
    correo: "yur@upb.edu.co"
    }
];

arreglo=buscarDominio(arreglo1);


var email = document.getElementById("campoUsuarioCorreo");
var password = document.getElementById("campoUsuarioContrasena");


function buscarDominio(arreglo){
    var arregloDominios = [];
    for(index in arreglo){
        if(arreglo[index]["correo"].includes('@upb.edu.co')){
            arregloDominios.push(arreglo[index]);
        }
    }
    return arregloDominios;    
}

verificarInicioSesion3(email,password,arreglo);

function verificarInicioSesion3(correo,contrasena,arreglo){
let respuesta = prompt("¿Cuál es el factorial de 6?")
}



function verificarCaptcha3(respuesta){
if (respuesta == 720){
    return true;
}else{return false;}

}



module.exports.verificarInicioSesion3 = verificarInicioSesion3;
module.exports.verificarCaptcha3 = verificarCaptcha3;
module.exports.buscarDominio = buscarDominio;

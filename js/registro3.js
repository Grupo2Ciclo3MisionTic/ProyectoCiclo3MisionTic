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
        }
    }
    return arregloDominios;    
}

function retornarCuenta(args){
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

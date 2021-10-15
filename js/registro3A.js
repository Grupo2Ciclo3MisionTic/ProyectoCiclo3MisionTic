// var registros = [{
//     nombre: "",
//     usuario: "",
//     password: "",
//     telefono: "",
//     direccion: "",
//     correo: ""
// }]

var registros = [];

/*
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

*/

//console.log(buscarDominio(arreglo1));
//console.log(arregloDominios);

/*
function buscarDominio(arreglo){
    var arregloDominios = [...arreglo];
    //console.log(arregloDominios);
    return arregloDominios.filter(item => item["correo"].includes('@upb.edu.co'))
  
}
*/

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
            
            

/*
function retornarCuenta(args){
    var counter = 0;
    var ocurrencias = 0;
    for(objeto in args){
        elemento = args[counter];
        for(prop in elemento){
            if(prop == "nombre"){
                if(elemento[prop].includes('a')){
                    console.log("El nombre tiene 'a");
                    if(prop == "telefono"){
                        if(elemento[prop].endsWith('4') || elemento[prop].endsWith('0')){
                            console.log("El telefono termina en '4' o en '0'");
                            ocurrencias++;
                            console.log(ocurrenciaa);
                        } 
                    }                
                }
            }
        }
        counter++;
    }
    return ocurrencias;    
}
*/   

module.exports.registros = registros;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;

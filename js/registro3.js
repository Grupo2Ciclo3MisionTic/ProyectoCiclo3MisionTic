var registros = [];

function buscarDominio(arreglo){
    var datos= {
        nombre: document.getElementById('campoNombre').value,
        usuario: document.getElementById('campoUsuario').value,
        contrasena: document.getElementById('campoContrasena').value,
        telefono: document.getElementById('campoTelefono').value,
        direccion: document.getElementById('campoDireccion').value,
        correo: document.getElementById('campoCorreo').value,
        confirmacionCorreo: document.getElementById('campoConfirmacionCorreo').value
    }
    registros.push(datos);
    
    return registros.filter(data => data.correo.includes('upb.edu.co'));;
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
            
            

module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;
module.exports.registros = registros;
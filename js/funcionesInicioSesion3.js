const registros = [];

var correo = document.getElementById("campoUsuarioCorreo");
var contraseña = document.getElementById("campoUsuarioContrasena");

function buscarDominio() {
    var datos = {
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


function verificarInicioSesion3(correo, contraseña, arreglo) {
    for (k in arreglo) {
        if (arreglo[k].correo == correo | arreglo[k].contraseña == contraseña) {
            let respuesta = verificarCaptcha3()
            return respuesta
        } else {
            return false
        }
    }
}

function verificarCaptcha3() {
    let respuesta = window.prompt("What's your sign?");
    if (respuesta == 720) {
        return true;
    } else {
        return false
    }
}



module.exports.buscarDominio = buscarDominio;
module.exports.verificarInicioSesion3 = verificarInicioSesion3;
module.exports.verificarCaptcha3 = verificarCaptcha3;
module.exports.registros = registros;
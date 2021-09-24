function validar_telefono(string){
    // defincion de variale y asignación de valor que si esta valido el parametro
    var valido = 1;
    var msg = "El telefono ingresado esta correcto..";
        
    // validando la longitud minina
    if (string.length < 7) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar un telefono con mínimo 7 caracteres";
    }
    // validando la longitud minina
    if (valido == 1 && string.length > 10) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar un telefono con máximo 10 caracteres";
    }
    if (
        (valido == 1 && typeof string != "string")
        ||
        (valido == 1 && isNaN(string))
       )
    {
        // estableciendo que no e// estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar un telefono con sólo digitos";
    }
    // mostrando un mensaje del resultado obtenido
    alert(msg);
    // retornando el resultado obtenido.
    return valido;

}

function validar_direccion(string){
   
   if ((!string.startsWith('Carrera'))  && (!string.startsWith('Transversal'))  && (!string.startsWith('Circular')) && (!string.startsWith('Calle')))
           {
               // estableciendo que no es valido
               valido = 0;
               msg = "La direccion debe iniciar con Carrera o con Transversal o con Circular o con Calle";
           }
           
           // validando la longitud minina
           if (valido == 1 && string.length > 30) {
               // estableciendo que no es valido
               valido = 0;
               msg = "Debe ingresar una direccion con máximo 30 caracteres";
           }
         
           // mostrando un mensaje del resultado obtenido
           alert(msg);
           // retornando el resultado obtenido.
           return valido;

}

module.exports.validar_telefono = validar_telefono;

module.exports.validar_direccion = validar_direccion;


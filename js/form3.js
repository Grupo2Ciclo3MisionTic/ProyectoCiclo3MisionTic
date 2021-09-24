function validar_telefono(string){
    // defincion de variale y asignación de valor que si esta valido el parametro
    var valido = 1;
    var msg = "El telefono ingresado esta correcto...";
        
    // validando la longitud minina
    if (string.length < 6) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe tener una longitud mayor a 6 ";
    }
    // validando la longitud minina
    if (valido == 1 && string.length > 10) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe tener una longitud máxima de 10 caracteres";
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
    if( /^\s+$/.test(string) ) {
        valido =0;
        msg = "No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’-’,’/";
      }
    // mostrando un mensaje del resultado obtenido
    alert(msg);
    // retornando el resultado obtenido.
    return valido;

}

function validar_direccion(string){
         
        var valido2 = 1;
        var msg = "Direccion ingresada de forma correcta";
   
        if ((!string.startsWith('Carrera')) && (!string.startsWith('Transversal'))  && (!string.startsWith('Circular')) && (!string.startsWith('Calle')))
           {
               // estableciendo que no es valido
               valido2 = 0;
               msg = "La direccion debe iniciar con Carrera o con Transversal o con Circular o con Calle";
           }
           if (string.length < 7) {
            // estableciendo que no es valido
            valido2 = 0;
            msg = "Debe tener una longitud mínima de 7 caracteres.";
           }
           // validando la longitud minina
           if (valido2 == 1 && string.length > 30) {
               // estableciendo que no es valido
               valido2 = 0;
               msg = " Debe tener una longitud máxima de 30 caracteres.";
           }

           if (!string.match(/#/)){
               
                valido2 = 0;
                msg = "Debe contener el carácter ‘#’ en algún lugar de la cadena";

           }


           // mostrando un mensaje del resultado obtenido
           alert(msg);
           // retornando el resultado obtenido.
           return valido2;

}


module.exports.validar_telefono = validar_telefono;

module.exports.validar_direccion = validar_direccion;

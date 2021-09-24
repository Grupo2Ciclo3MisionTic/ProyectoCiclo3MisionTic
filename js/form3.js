function validar_telefono(string){
    // defincion de variale y asignación de valor que si esta valido el parametro
    var valido = true;
    var msg = "El telefono ingresado esta correcto...";
        
    // validando la longitud minina
    if (string.length < 6) {
        // estableciendo que no es valido
        
        msg = "Debe tener una longitud mayor a 6 ";
        valido =false;
    }
    // validando la longitud minina
    if (valido == true && string.length > 10) {
        // estableciendo que no es valido
        
        msg = "Debe tener una longitud máxima de 10 caracteres";
        valido =false;
        
    }
    if (
        (valido == true && typeof string != "string")
        ||
        (valido == true && isNaN(string))
       )
    {
        // estableciendo que no e// estableciendo que no es valido
        
        msg = "Debe ingresar un telefono con sólo digitos";
        valido =false;
        
    }
    if( /^\s+$/.test(string) ) {

        msg = "No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’-’,’/";
        valido =false;
      }
    // mostrando un mensaje del resultado obtenido
    alert(msg);
    // retornando el resultado obtenido.
    return valido;

}

function validar_direccion(string){
         
        var valido2 = true;
        var msg = "Direccion ingresada de forma correcta";
   
        if ((!string.startsWith('Carrera')) && (!string.startsWith('Transversal'))  && (!string.startsWith('Circular')) && (!string.startsWith('Calle')))
           {
               // estableciendo que no es valido
               
                msg = "La direccion debe iniciar con Carrera o con Transversal o con Circular o con Calle";
                valido2 =false;
           }
           if (string.length < 7) {
            // estableciendo que no es valido
            
                msg = "Debe tener una longitud mínima de 7 caracteres.";
                valido2 =false;
           }
           // validando la longitud minina
           if (valido2 == true && string.length > 30) {
               // estableciendo que no es valido
               
               msg = " Debe tener una longitud máxima de 30 caracteres.";
               valido2 =false;
           }

           if (!string.match(/#/)){
               
                
                msg = "Debe contener el carácter ‘#’ en algún lugar de la cadena";
                valido2 =false;

           }


           // mostrando un mensaje del resultado obtenido
           alert(msg);
           // retornando el resultado obtenido.
           return valido2;

}


module.exports.validar_telefono = validar_telefono;

module.exports.validar_direccion = validar_direccion;

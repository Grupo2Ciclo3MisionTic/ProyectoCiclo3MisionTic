function validar_telefono(string){
    var respuesta =false;
    if (string.lenght>7 && string.lenght<=10 && string.includes("@", "!","_","-","/")){
        respuesta=true;
        return respuesta;
    }else{
        return respuesta;
    }
}

function validar_direccion(string){
    var respuesta=false;
    if (string.lenght>=7 && string.lenght<=30 && string.includes("#") && string.search("Carrera","Transversal", "Calle", "Circular")){
        respuesta=true;
        return respuesta;
    }else{
        return respuesta;
    }
}
module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;
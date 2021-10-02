function buscarDominio(arreglo){
    var args = [];
    for (var i = 0; i< arreglo.length; i++){

        if(arreglo[i].campoCorreoElectronico.split("@")[1] == "upb.edu.co"){
        
        args.push(arreglo);
        }
    }
    return(args);
}

function retornarCuenta(args){
    var ocurrencias = 0;
    for (var i= 0; i<args.length; i++){

        if(args[i].campoNombre.starsWith("a")){
            
            if(args[i].campoTelefono.endsWith("0") || args[i].campoTelefono.endsWith("4")){
                
                ocurrencias ++;
                console.log(ocurrencias);
            }

        }
    }
    return ocurrencias;  
    

}


module.exports.buscarDominio = buscarDominio();
module.exports.retornarCuenta = retornarCuenta();
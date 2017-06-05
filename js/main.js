    $(document).ready(function() {
              $('#accordion').accordion();
  });
	
	 function convertir(tipo){
var can=parseFloat(document.formulario.cantidad.value);

if(document.formulario.cantidad.value == ""  ){
alert("Falta Ingresar una Cantidad");

}else{if(tipo =="fah"){

    resul= can-32*(5/9);
	document.formulario.resultado.value=resul;
}

if(tipo =="cel"){
   
    resul= (can*(5/9))+32;
	document.formulario.resultado.value=resul;
	
}

 }
}
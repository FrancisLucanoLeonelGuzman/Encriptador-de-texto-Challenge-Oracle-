var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    var mensaje = document.querySelector("#validar-texto");
    var valorMensaje = mensaje.value;
    var campoDos = document.querySelector("#msg");
    var decript = "";
    
    decript = valorMensaje.replace(/ai/g, letras[0]).replace(/enter/g, letras[1]).
    replace(/imes/g, letras[2]).replace(/ober/g, letras[3]).replace(/ufat/g, letras[4]);    
    campoDos.value = decript;
    limpiarCampoUno();
});
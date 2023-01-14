var inputUno = document.querySelector("#validar-texto");
inputUno.addEventListener("input", function (event) {
    var textoEntrada = this.value;
    var textoMinusculas = "";
    var textoValidado = ""; 
    var filtroGeneral = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    for (var i = 0; i < textoEntrada.length; i++) {
        for (var j = 0; j < filtroGeneral.length; j++) {
            
            if (filtroGeneral[j] == textoEntrada[i]) {
                
                textoValidado += textoEntrada[i];
            }
        }
    }
    textoMinusculas = textoValidado.toLowerCase(); 
    this.value = textoMinusculas;
});



document.getElementById("botaoMensagem").addEventListener("click", function () {
    // Cambia el mensaje original
    document.getElementById("mensagem").textContent = "";

    // Muestra el contenedor del gato y mensaje extra
    document.getElementById("contenedorGato").style.display = "block";
});

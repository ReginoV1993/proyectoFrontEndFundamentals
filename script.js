document.addEventListener("DOMContentLoaded", function() {
    const botonesCarrito = document.querySelectorAll(".producto button");

    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", function() {
            alert("Producto agregado al carrito 🛒");
        });
    });

    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", function() {
            alert("Explorando la categoría: " + this.querySelector("p").textContent);
        });
    });
});
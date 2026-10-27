// Buscamos el aviso y el botón para aceptar las cookies.
var avisoCookies = document.getElementById("avisoCookies");
var botonAceptar = document.getElementById("aceptarCookies");

// Comprobamos si el usuario ya aceptó las cookies anteriormente.
if (localStorage.getItem("cookiesAceptadas") === "true") {
    avisoCookies.style.display = "none";
}

// Guardamos la aceptación para que el aviso no aparezca al recargar.
botonAceptar.addEventListener("click", function () {
    localStorage.setItem("cookiesAceptadas", "true");
    avisoCookies.style.display = "none";
});

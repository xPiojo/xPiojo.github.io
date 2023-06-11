let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Obtén el elemento de navegación
var nav = document.querySelector("nav");

// Obtén la altura del encabezado
var headerHeight = document.querySelector("header").offsetHeight;

// Añade un controlador de eventos a los enlaces de navegación
var navLinks = document.querySelectorAll(".navlist a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var targetId = this.getAttribute("href"); // Obtiene el ID del objetivo del enlace

    // Calcula la posición del objetivo restando la altura del encabezado
    var targetPosition =
      document.querySelector(targetId).offsetTop - headerHeight;

    // Desplaza la página al objetivo con un desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

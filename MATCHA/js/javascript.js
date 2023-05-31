

// Obtener el navbar
var navbar = document.querySelector('.navbar');

// Obtener la posición actual del scroll
var prevScrollpos = window.pageYOffset;

// Escuchar el evento scroll
window.onscroll = function() {

  // Obtener la posición actual del scroll
  var currentScrollPos = window.pageYOffset;

  // Si la posición actual del scroll es mayor que la posición anterior
  if (prevScrollpos > currentScrollPos) {
    // Mostrar el navbar
    navbar.style.display = "block";
  } else {
    // Ocultar el navbar
    navbar.style.display = "none";
  }

  // Guardar la posición actual del scroll para la próxima vez
  prevScrollpos = currentScrollPos;
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").classList.remove("nav-hide");
  } else {
    document.querySelector("nav").classList.add("nav-hide");
  }
  prevScrollPos = currentScrollPos;
}


let count = 0;
const counterElement = document.getElementById('counter');

function incrementCounter() {
  count++;
  counterElement.innerText = count;
}

function decrementCounter() {
  if (count > 0) {
    count--;
    counterElement.innerText = count;
  }
}
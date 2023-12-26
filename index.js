import './graphiquebaton.js';
import './gender.js';

"use strict";



window.addEventListener('load', function () {
  var loader = document.querySelector('.loader');
  var contenu = document.querySelector('.contenu');

  // Masquer le loader après 3 secondes (3000 millisecondes)
  setTimeout(function () {
      loader.classList.add('fondu-out'); // Ajoutez la classe pour déclencher la transition de fondu

      // Afficher le contenu avec l'effet de fondu
      contenu.style.display = 'block';
      setTimeout(function () {
          contenu.style.opacity = '1';

          // Initialiser AOS après l'affichage du contenu
          AOS.init({
              // Vos options de configuration AOS vont ici
          });
      }, 100); // Ajustez le délai pour l'effet de fondu
  }, 3000);
});




// animation machine à écrire

// Variable pour suivre si l'animation a été déclenchée
let animationTriggered = false;

window.addEventListener("DOMContentLoaded", (event) => {
  // Ajoute un gestionnaire d'événements de défilement
  window.addEventListener("scroll", () => {
    // Vérifie si l'animation a déjà été déclenchée
    if (!animationTriggered) {
      // Vérifie si l'élément à animer est visible à l'écran
      if (isElementInViewport(document.querySelector(".animate-text"))) {
        // Si l'élément est visible, déclenche l'animation
        animate_text();
        // Met à jour la variable pour indiquer que l'animation a été déclenchée
        animationTriggered = true;
      }
    }
  });
});

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour animer le texte
function animate_text() {
  let delay = 5,
    delay_start = 0,
    contents,
    letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        // effet machine à écrire (SIMPLE)
        elem.textContent += letter;

        // OU :
        // effet machine à écrire + animation CSS (SPECIAL)
        /*
        var span = document.createElement('span');
        span.innerHTML = letter.replace(/ /,'&nbsp;');
        elem.appendChild(span);
        */
      }, delay_start + delay * index_1);
    });
    delay_start += delay * letters.length;
  });
}


//cercle scroll

let popup = document.getElementById('popup');
let openPopupButton = document.getElementById('openPopup');
let fermerButton = document.querySelector('.fermer');

openPopupButton.addEventListener('click', function() {
  popup.style.display = 'block';
});

fermerButton.addEventListener('click', function() {
  popup.style.display = 'none';
});



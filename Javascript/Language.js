const idiomaIngles = {
  title: "Simon Says",
  how: "How to play:",
  text:"A pattern will appear in the squares below, you will need to remember the pattern and click the squares, every level the pattern will get more colors to click! Enjoy.",
  perdiste:"U lost!",
  again: "Try again",
  text2: "Recommendations: When the pattern appear, and u click every square, wait to change the color, also, dont click the squares before, this can affect the game. All the Recommendations are for more enjoyability",
  button:"Start Game"
};

const idiomaEspanol = {
  title: "Simon Dice",
  how: "Como jugar:",
  text:"Un patrón aparecera en los cuadros de abajo, tendras que recordar el patron y darle click a los cuadrados, cadad nivel el patron tendra mas colores los cuales darles click! Disfruta.",
  perdiste: "Perdiste!",
  again: "Jugar denuevo",
  button: "Iniciar juego",
  text2: "Recomendaciones: Cuando aparezca el patrón y hagas clic en cada cuadrado, espera a que cambie el color, además, no hagas clic en los cuadrados antes, esto puede afectar el juego. Todas las recomendaciones son para que disfrute más"
};


function cambiarIdioma(idioma) {
  Object.keys(idioma).forEach(key => {
    const elemento = document.getElementById(key);
    if (elemento) {
      elemento.textContent = idioma[key];
      document.getElementById("sideBar").style.width="0"
      document.querySelector(".dropdown").style.display = "none"
    }
  });
}

function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show")
    document.getElementById("myDropdown2").classList.toggle("show")
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
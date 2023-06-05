const idiomaIngles = {
    title: "Simon Says",
    how: "How to play:",
    text:"A pattern will appear in the squares below, you will need to remember the pattern and click the squares, every level the pattern will get more colors to click! Enjoy.",
    button:"Start Game"
  };
  
  const idiomaEspanol = {
    title: "Simon Dice",
    how: "Como jugar:",
    text:"Un patrón aparecera en los cuadros de abajo, tendras que recordar el patron y darle click a los cuadrados, cadad nivel el patron tendra mas colores los cuales darles click! Disfruta.",
    button: "Iniciar juego"
  };
  function cambiarIdioma(idioma) {
    Object.keys(idioma).forEach(key => {
      const elemento = document.getElementById(key);
      if (elemento) {
        elemento.textContent = idioma[key];
      }
    });
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
  var square = document.querySelectorAll('.square');

var colors = ['red', 'yellow', 'green', 'blue'];

function selectRandomDiv() {
  for (var i = 0; i < square.length; i++) {
    square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
  }
  var number = Math.floor(Math.random() * square.length);

  square[number].classList.add(colors[number]+"2");


  setTimeout(selectRandomDiv, 1000);
}
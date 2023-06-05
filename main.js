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
  var one = document.getElementById("oneNumber")
  var two = document.getElementById("twoNumber")
  var three = document.getElementById("threeNumber")
  var numbers = []
  numbers.push(one, two, three)
  var colors = ['red', 'yellow', 'green', 'blue'];
  var delay
  var sequency = []
  var mySequency = {}
  var number = Math.floor(Math.random() * square.length);
  var rondas = 1

function selectRandomDiv() {
  for(var i = 0; i < rondas;i++){
  for (var i = 0; i < square.length; i++) {
    square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
  }

  square[number].classList.add(colors[number]+"2");
  var myTimeout = setTimeout(selectRandomDiv, delay);
  delay = 1000
  myTimeout
  if(square[number].classList = colors[number]+"2"){
    clearTimeout(myTimeout)
    setInterval(function () {square[number].classList.remove(colors[number]+"2"); square[number].classList.add(colors[number], "square")}, 1600);
  }
  takeSequency(square[number])
  }
}

function takeSequency(x) {
  sequency.push(x)
  console.log(x)
}
function selectSquare(x) {
  x.classList.add(x.classList[1] + "2")

}
function changeNumberOne() {
  for(var i = 0; i < 1; i++){
    numbers[0].style.display = "block"
  
  }
}
function changeNumberTwo() {
  for(var i = 0; i < 1; i++){
    numbers[1].style.display = "block"
    numbers[0].style.display = "none"
    for (var i = 0; i < square.length; i++) {
      square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
    }
  }
}
function changeNumberThree() {
  for(var i = 0; i < 1; i++){
    numbers[2].style.display = "block"
    numbers[1].style.display = "none"
  }
}
function deleteNumber() {
  for(var i = 0; i < 1; i++){
    numbers[2].style.display = "none"
    selectRandomDiv()
  }
}

function changeNumber() {

  const myTimeout1 = setTimeout(changeNumberOne, 0);
  const myTimeout2 = setTimeout(changeNumberTwo, 1800);
  const myTimeout3 = setTimeout(changeNumberThree, 2600);
  const myTimeout4 = setTimeout(deleteNumber, 3400)
  if(numbers[0].style.display = "block"){
    clearTimeout(myTimeout1)

  } else if(numbers[1].style.display = "block"){
    clearTimeout(myTimeout2)
  } else if(numbers[2].style.display = "block"){
    clearTimeout(myTimeout3)
  } else if(numbers[2].style.display = "block"){
    clearTimeout(myTimeout4)
  }
}

function countDown() {
  setTimeout(changeNumber, 1000);
}


//Declarando variables

let mySequency = []
var square = document.querySelectorAll('.square');
var one = document.getElementById("oneNumber")
var two = document.getElementById("twoNumber")
var three = document.getElementById("threeNumber")
var numbers = []
numbers.push(one, two, three)
var colors = ['red', 'yellow', 'green', 'blue'];
var sequency = []
var btn = document.getElementById("button")
var torf = document.getElementById("torf")
var sequencys = []
var mySequencys = []
var test = []
var contador = document.getElementById("contador")
var text = document.getElementById("text")
var text2 = document.getElementById("text2")
var how = document.getElementById("how")
var rondas = "0"
var elem


//Cambar idioma
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

  //Dropdown para idioma
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

//Agarrar y cambiar color del cuadro
function selectRandomDiv() {
  var number = Math.floor(Math.random() * square.length);
    sequency = square[number].classList
    sequencys.push(sequency)
    square[number].classList.add(colors[number]+"2")
    console.log(number + " Numero")
    console.log(sequencys)
    for(var i = 0;i < sequencys.length;i++){
      elem = sequencys[i]
    }
    console.log(elem)

}

//Intervalos de tiempo para el juego
function rounds () {
  for (var i = 0; i < square.length; i++) {
    square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
  }
  //Quitar y poner cosas cuando inicie
  contador.style.display = "block"
  contador.style.fontSize = "50px"
  text.style.display = "none"
  text2.style.display = "none"
  how.style.display = "none"
  var intervalA = setInterval(function(){
    var interval = setInterval(function(){
      selectRandomDiv()

    }, 1000)
    interval
    var timeout2 = setTimeout(function(){
      clearTimeout(interval);
      for (var i = 0; i < square.length; i++) {
        square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
      }
    }, 1500)
    timeout2
  }, 1000)
  rondas++
  var delay = rondas + "000"
  let timeout4 = setTimeout(function(){ 
      clearInterval(intervalA)
  }, delay)
  timeout4
}

function compararSecuencias(){
  if(mySequencys.length == sequencys.length){
      if(mySequencys[0] == sequencys[0]){
        console.log("Correct")
        sequencys.pop(elem)
        mySequencys.pop(elem)
        rounds()
        console.log(sequencys.length)
      } else {
        console.log("False")
        console.log(mySequencys)
        console.log(sequencys)
      }
  } else{
    console.log("Aun no estoy completo")
    console.log(mySequencys.length)
    console.log(sequencys.length)
  }
}

function selectSquare(x) {
  x.classList.add(x.classList[1] + "2")
  mySequency = x.classList
  mySequencys.push(mySequency)
  console.log(mySequencys.length)
  console.log(sequencys.length)

  setTimeout(function(){   compararSecuencias();
torf.textContent = ""; torf.style.color= "";x.classList.remove(x.classList[1] +"2"); }, 600)
}



//Cambiar los numeros y al final quitarlos
function changeNumberOne() {

    numbers[0].style.display = "block"

  
}
function changeNumberTwo() {

    numbers[1].style.display = "block"
    numbers[0].style.display = "none"


}
function changeNumberThree() {

    numbers[2].style.display = "block"
    numbers[1].style.display = "none"
  
}
function deleteNumber() {

    numbers[2].style.display = "none"
    rounds()

  }

//Codigo para el countdown
function changeNumber() {
  const myTimeout1 = setTimeout(changeNumberOne, 0);
  const myTimeout2 = setTimeout(changeNumberTwo, 800);
  const myTimeout3 = setTimeout(changeNumberThree, 1500);
  const myTimeout4 = setTimeout(deleteNumber, 2100)
  if(numbers[0].style.display = "block"){
    clearTimeout(myTimeout1)
        btn.style.display = "none"

  } else if(numbers[1].style.display = "block"){
    clearTimeout(myTimeout2)
  } else if(numbers[2].style.display = "block"){
    clearTimeout(myTimeout3)
  } else if(numbers[2].style.display = "block"){
    clearTimeout(myTimeout4)
  }
}
//Funcion que va a ejecutar el countdown
function countDown() {
  setTimeout(changeNumber, 100);
}


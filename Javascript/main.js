const idiomaIngles = {
  title: "Simon Says",
  how: "How to play:",
  text:"A pattern will appear in the squares below, you will need to remember the pattern and click the squares, every level the pattern will get more colors to click! Enjoy.",
  perdiste:"U lost!",
  again: "Try again",
  text2: "Recommendations: When the pattern appear, and u click every square, wait to change the color, also, dont click the squares before, this can affect the game. All the Recommendations are for more enjoyability",
  button:"Start Game",
  random: "Random",
  faster: "Faster",
  dropbtn1: "Language",
  btnIdioma: "English",
  btnIdioma1: "Spanish",
  modosb: "Gamemodes"
};

const idiomaEspanol = {
  title: "Simon Dice",
  how: "Como jugar:",
  text:"Un patrón aparecera en los cuadros de abajo, tendras que recordar el patron y darle click a los cuadrados, cadad nivel el patron tendra mas colores los cuales darles click! Disfruta.",
  perdiste: "Perdiste!",
  again: "Jugar denuevo",
  button: "Iniciar juego",
  text2: "Recomendaciones: Cuando aparezca el patrón y hagas clic en cada cuadrado, espera a que cambie el color, además, no hagas clic en los cuadrados antes, esto puede afectar el juego. Todas las recomendaciones son para que disfrute más",
  random: "Aleatorio",
  faster: "Más rápido",
  normal: "Normal",
  dropbtn1: "Cambiar Idioma",
  btnIdioma: "Inglés",
  btnIdioma1: "Español",
  modosb: "Modos de Juego"
};
function openSide(){
  document.getElementById("sideBar").style.width = "150px"
}
function closeSide(){
  document.getElementById("sideBar").style.width = "0"
}
var game = document.getElementById("game")
var game1 = document.getElementById("game1")
var currentGame = ["normal"]
game.textContent = "Current Gamemode: " + "Normal"
game1.textContent = "Actual Modo de Juego: " + "Normal"

function changeMode(x){
  
  if(x.id == "random"){
    random1 = random.textContent
    currentGame.push(random.id)
    random2 = "Aleatorio"
  } else if(x.id == "faster"){
    random1 = faster.textContent
    currentGame.push(faster.id)
    random2 = "Más rápido"
  } else{
    random1 = normal.textContent
    currentGame.push(normal.id)
    random2 = "Normal"
  }

  game1.textContent = "Actual Modo de Juego: " + random2
  game.textContent = "Current Gamemode: " + random1
}
function changeMode1(x){
  
  if(x.id == "random1"){
    random1 = random.textContent
    currentGame.push(random.id)
    random2 = "Aleatorio"
    document.getElementById("sideBar").style.width = "0"

  } else if(x.id == "faster1"){
    random1 = faster.textContent
    currentGame.push(faster.id)
    random2 = "Más rápido"
    document.getElementById("sideBar").style.width = "0"
  } else{
    random1 = normal.textContent
    currentGame.push(normal.id)
    random2 = "Normal"
    document.getElementById("sideBar").style.width = "0"
  }
  game1.textContent = "Actual Modo de Juego: " + random2
  game.textContent = "Current Gamemode: " + random1
}
function cambiarIdioma(idioma) {
  Object.keys(idioma).forEach(key => {
    const elemento = document.getElementById(key);
    if (elemento) {
      elemento.textContent = idioma[key];
      document.getElementById("myDropdown").classList.remove("show")
      document.getElementById("sideBar").style.width="0"
    }
  });
  if(game.style.display == "block"){
    game.style.display = "none"
    game1.style.display = "block"
  } else{
    game.style.display = "none"
    game1.style.display = "block"
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show")
    document.getElementById("myDropdown1").classList.toggle("show")

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


//Declarando variables
var container = document.getElementById("container")
var one = document.getElementById("oneNumber")
var two = document.getElementById("twoNumber")
var three = document.getElementById("threeNumber")
var numbers = []
numbers.push(one, two, three)
var contador = document.getElementById("contador")
var rondas = "0"
var btn = document.getElementById("button")
var drop = document.getElementById("div")
var perdiste = document.getElementById("perdiste")
var again = document.getElementById("again")
var textA = document.getElementById("textA")
var textA = document.getElementById("textA")
var againA= document.getElementById("againA")
var colors = ["red", "yellow", "green", "blue"]
var a = -1
var testing = []
var darclick = true
againA.style.display = "none"
var mySequency
var mySequencys = []
var sequencys= []
var sequency
var square = document.querySelectorAll('.square');
var cuadradosA = []
var x
var a = -1
var darclick = true
var pop
var delayN = "0"
var wrong = false

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
    pop = currentGame.pop()
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
        darclick = false
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
function selectRandomDiv() {
  var number = Math.floor(Math.random() * square.length);
  sequency = square[number]
  sequencys.push(sequency) 
  cuadradosA.push(sequency)
  a++
  var nose1 = sequencys[a].classList 
  if(pop === "normal" || pop === "faster"){
    sequencys[a].classList.add(nose1[1] + "2")
  } else if(pop === "random"){
    for(var i = 0; i < sequencys.length;i++){
      elem = sequencys[i]
    }
    square[number].classList.add(colors[number] + "2")
  }
    if(sequencys.length){
      var spliceA = sequencys.splice(rondas, x);
      spliceA
    }
  
}
function compararSecuencias(){

  if (mySequencys.length === sequencys.length) {

    ganaste = false
    for (var i = 0; i < sequencys.length; i++) {
      if (mySequencys[i] === sequencys[i]) {
        ganaste = true
        console.log("true")
      } else {
        console.log("false")
        wrong = true
        ganaste = false
        break
      }

    }

    if (ganaste === true) {
      console.log("ganaste")
    if(pop === "random"){
      sequencys = []
      }
      mySequencys = []
      a = -1
      rounds()
      darclick = false;
    }

    else {  
      contador.style.display = "none"
      perdiste.style.display = "block"
      setTimeout(function(){
        perdiste.style.display = "none"
        container.style.display="none"
        again.style.display = "block"
        againA.style.display = "flex"
      }, 1500)
    }
  } else {
  console.log("Aun no estoy completo")

  }

}

function rounds () {
  for (var i = 0; i < square.length; i++) {
    square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
  }
  //Quitar y poner cosas cuando inicie
  contador.style.display = "block"
  contador.style.fontSize = "50px"
  textA.style.display ="none"
  drop.style.display = "none"
  rondas++
    x = rondas
    x = (x ^ 2 / 2) + (x / 2)
  mySequencys = []
  
  contador.textContent = 0 + "/" + rondas
  delayN++

  if(pop === "normal" || pop === "random"){
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
  var delay = delayN + "000"

  var timeout4 = setTimeout(function(){
    console.log("Timeout4")
        clearInterval(intervalA)

        darclick = true
  }, delay)
  timeout4
  } else if(pop === "faster"){
    delayN += 500
    console.log(delayN)
    var intervalA = setInterval(function(){

      var interval = setInterval(function(){
        selectRandomDiv()

      }, 500)
      interval
      var timeout2 = setTimeout(function(){
        clearTimeout(interval);

        for (var i = 0; i < square.length; i++) {
          square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
        }
      }, 750)
      timeout2
    }, 500)

    var timeout4 = setTimeout(function(){
      console.log("Timeout4")
          clearInterval(intervalA)
          darclick = true
    }, delayN)
    timeout4
  }
  


}

function tryAgain(){
  sequencys = []
  rondas = "0"
  a = -1
  delayN = "0"
  container.style.display="flex"
  contador.style.display = "none"
  contador.style.fontSize = "50px"
  textA.style.display ="block"
  drop.style.display = "flex"
  again.style.display = "none"
  againA.style.display = "none"
  btn.style.display = "block"
  wrong = "false"
  pop = ""
  currentGame = ["normal"]
  drop.style.height = "58px"
}

function selectSquare(x) {
  if(darclick){
    x.classList.add(x.classList[1] + "2")
    mySequency = x
    mySequencys.push(mySequency)
    contador.textContent = mySequencys.length + "/" + rondas
    
    setTimeout(function(){   compararSecuencias();
  x.classList.remove(x.classList[1] +"2");      }, 600)
  } else {
    console.log("apocosi tilin")
  }
}



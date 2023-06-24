//Declarando variables
var container = document.getElementById("container")
var mySequency = []
var square = document.querySelectorAll('.square');
var one = document.getElementById("oneNumber")
var two = document.getElementById("twoNumber")
var three = document.getElementById("threeNumber")
var numbers = []
numbers.push(one, two, three)
var colors = ['red', 'yellow', 'green', 'blue'];
var sequency = []
var btn = document.getElementById("button")
var sequencys = []
var mySequencys = []
var contador = document.getElementById("contador")
var rondas = "0"
var delayN = "0"
var drop = document.getElementById("div")
var perdiste = document.getElementById("perdiste")
var again = document.getElementById("again")
var textA = document.getElementById("textA")
var textA = document.getElementById("textA")
var againA= document.getElementById("againA")
var cuadradosA = []
var x
var a = -1
var testing = []
var darclick = true
againA.style.display = "none"


//Agarrar y cambiar color del cuadro
function selectRandomDiv() {
  var number = Math.floor(Math.random() * square.length);
    sequency = square[number]

    sequencys.push(sequency) 
    cuadradosA.push(sequency)
    a++
    console.log(a + " a")
    var nose1 = sequencys[a].classList
    console.log(sequencys[a])
    sequencys[a].classList.add(nose1[1] + "2")
    if(sequencys.length){
      var spliceA = sequencys.splice(rondas, x);
      spliceA
    }
  console.log(sequencys )


}
//Intervalos de tiempo para el juego
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


  delayN++
  mySequencys = []

  
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

  contador.textContent = 0 + "/" + rondas
  var delay = delayN + "000"
    var timeout4 = setTimeout(function(){
          clearInterval(intervalA)
          darclick = true
    }, delay)
    timeout4
}
var wrong = false

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

function tryAgain(){
  sequencys = []
  rondas = "0"
  a = -1
  delayN = "0"
  container.style.display="flex"
  contador.style.display = "none"
  contador.style.fontSize = "50px"
  textA.style.display ="block"
  drop.style.display = "block"
  again.style.display = "none"
  againA.style.display = "none"
  btn.style.display = "block"
  wrong = "false"
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


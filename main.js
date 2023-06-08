let mySequency = []

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
  var sequency = []
  var btn = document.getElementById("button")
  var torf = document.getElementById("torf")
  var sequencys = []
  var mySequencys = []
  var delay = 1500
      // setInterval(function(){ square[number].classList.remove(colors[number]+"2"); clearTimeout(myTimeOut)}, 1500)
function selectRandomDiv() {
  var number = Math.floor(Math.random() * square.length);
    sequency = square[number].classList
    sequencys.push(sequency)
    square[number].classList.add(colors[number]+"2")
    console.log(number)
}

function rounds () {
  for (var i = 0; i < square.length; i++) {
    square[i].classList.remove('red2', 'yellow2', 'green2', 'blue2');
  }
  btn.style.display = "none"
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
    }, delay)
    timeout2
  }, 1000)
  setTimeout(function(){ 
      clearInterval(intervalA)
  }, 3000)



}



function compararSecuencias() {
  if (JSON.stringify(mySequencys) === JSON.stringify(sequencys) ) {
    torf.innerHTML = "Correct"
  } else {
    torf.style.color = "red"
    torf.innerHTML = "False"
  }
}

function selectSquare(x) {
  x.classList.add(x.classList[1] + "2")
  setTimeout(function(){torf.textContent = ""; torf.style.color= "";x.classList.remove(x.classList[1] +"2");}, 600)
  mySequency = x.classList
  mySequencys.push(mySequency)

  compararSecuencias()
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
    rounds()
  }
}

function changeNumber() {

  const myTimeout1 = setTimeout(changeNumberOne, 0);
  const myTimeout2 = setTimeout(changeNumberTwo, 600);
  const myTimeout3 = setTimeout(changeNumberThree, 1100);
  const myTimeout4 = setTimeout(deleteNumber, 1900)
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


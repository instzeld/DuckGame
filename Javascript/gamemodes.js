
function modos() {
  document.getElementById("modosDrop").classList.toggle("show")
}



window.onclick = function(event) {
  if (!event.target.matches('.modosbtn')) {
    var dropdowns1 = document.getElementsByClassName("modos-content");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
  }
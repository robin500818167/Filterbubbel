// import randomIsland from './randomIslands.js';
// randomIsland();
// import randomBottle from './randomBottles.js';
// randomBottle();
// var elem = document.querySelector('input[type="range"]');
//   var newValue = elem.value;
//   // var target = document.querySelector('.value');
//   // target.innerHTML = newValue;
//   console.log(newValue)
// elem.addEventListener("input");
function inputRange() {
  var field1 = document.getElementById("field").value;
  localStorage.setItem('rangeValue', field1);
}

function changeDelay() {
  var v = localStorage.getItem('rangeValue'); 
console.log(document.getElementById("island"));
  if (v < 3)
  {
    document.getElementById("kat").style.animationDelay = "3s";
    document.getElementById("hond").style.animationDelay = "3s";
    document.getElementById("konijn").style.animationDelay = "3s";
  }
  if (v > 3)
  {
    document.getElementById("kat").style.animationDelay = "10s";
    document.getElementById("hond").style.animationDelay = "10s";
    document.getElementById("konijn").style.animationDelay = "10s";
  }
}

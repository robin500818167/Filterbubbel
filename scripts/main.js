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

  if (v < 25) //zacht
   {
    document.getElementById("kat").style.animationDelay = "8s";
    document.getElementById("hond").style.animationDelay = "12s";
    document.getElementById("konijn").style.animationDelay = "16s";
  }
  if (v >= 25) //hard
  {
    console.log("test2")
    document.getElementById("kat").style.animationDelay = "8s";

    document.getElementById("hond").style.animationDelay = "10s";
    var hEi = document.querySelectorAll('.hEi');
    for (var i = 0; i < hEi.length; i++) {
    var currenthEi = hEi[i];
    currenthEi.style.animation = "gone 1.0s forwards 10s";
    }
    document.getElementById("konijn").style.animationDelay = "6s";
    var kEi = document.querySelectorAll('.kEi');
    for (var i = 0; i < kEi.length; i++) {
    var currentkEi = kEi[i];
    currentkEi.style.animation = "gone 1.0s forwards 6s";
    }
    document.getElementById("popup1").style.animationDelay = "13s";
  }
}

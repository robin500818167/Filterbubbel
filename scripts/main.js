function inputRange() {
  var field1 = document.getElementById("field").value;
  localStorage.setItem('rangeValue', field1);
}
function changeDelay() {
  var v = localStorage.getItem('rangeValue'); 

  if (v < 25) //zacht
   {
    console.log("zacht")
    document.getElementById("kat").style.animationDelay = "2s";
    document.getElementById("hond").style.animationDelay = "6s";
    document.getElementById("konijn").style.animationDelay = "10s";
  }
  if (v >= 25) //hard
  {
    document.getElementById("kat").style.animationDelay = "2s";
    document.getElementById("hond").style.animationDelay = "4s";
    var hEi = document.querySelectorAll('.hEi');
    for (var i = 0; i < hEi.length; i++) {
    var currenthEi = hEi[i];
    currenthEi.style.animation = "gone 1.0s forwards 4s";
    }
    document.getElementById("konijn").style.animationDelay = "0s";
    var kEi = document.querySelectorAll('.kEi');
    for (var i = 0; i < kEi.length; i++) {
    var currentkEi = kEi[i];
    currentkEi.style.animation = "gone 1.0s forwards 0s";
    }
    document.getElementById("popup1").style.animationDelay = "7s";
  }
}

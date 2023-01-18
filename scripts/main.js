// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'
import randomIsland from './randomIslands.js';
randomIsland();
import randomBottle from './randomBottles.js';
randomBottle();


  
var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);


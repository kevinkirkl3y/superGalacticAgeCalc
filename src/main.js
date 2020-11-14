import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calc from './js/calc';

$(document).ready(function() {
  $("button#age-lifex-form").submit(function(event) {
    event.preventDefault(event);
    const calc = new Calc(age, lifeX);
    const age = parseInt($('#inputtedAge').val());
    const lifeX = parseInt($('#inputtedLifeX').val());
    
    console.log(calc.jupAge());
  });





});
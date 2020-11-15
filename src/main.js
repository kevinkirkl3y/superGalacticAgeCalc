import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calc from './js/calc';

$(document).ready(function() {
  $("#age-lifex-form").submit((e) => {
    e.preventDefault();
    const age = parseInt($('#inputtedAge').val());
    const lifeX = parseInt($('#inputtedLifeX').val());
    const calc = new Calc(age, lifeX);
    const mercuryResponse = `"On Mercury, you would be ${calc.mercAge()} years old. You would have ${calc.mercYrsLeft()} years left to live on the first planet from the Sun."`;
    console.log(mercuryResponse);
  });
});
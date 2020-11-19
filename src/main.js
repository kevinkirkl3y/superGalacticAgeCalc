import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calc from './js/calc';

$(document).ready(function() {
  $("#age-lifex-form").submit(function(event) {
    event.preventDefault();
    const age = parseInt($('#inputtedAge').val());
    const lifeX = parseInt($('#inputtedLifeX').val());
    const calc = new Calc(age, lifeX);
    
    if(age<lifeX) {
      const solarSystemResponseYrsLeft = 
      `<p>On Mercury, you would be ${calc.mercAge()} years old. You would have ${calc.mercYrsLeft()} years left to live on the first planet from the Sun.</p>
      <p> On Venus, you would be ${calc.venAge()} years old. You would have ${calc.venYrsLeft()} years left to live on the second planet from the sun.</p>
      <p> On Mars, you would be ${calc.marsAge()} years old. You would have ${calc.marsYrsLeft()} years left to live on the red planet.</p>
      <p> On Jupiter, you would be ${calc.jupAge()} years old. You would have ${calc.jupYrsLeft()} years left to live bearing the weight of it's immense gravity.</p>`;
      $('#solar-age-response').html(solarSystemResponseYrsLeft);
    } else {
      const solarSystemResponseYrsPast = 
      `<p>On Mercury, you would be ${calc.mercAge()} years old. You have lived ${calc.mercYrsPast()} years past your expected lifespan on the first planet from the Sun.</p>
      <p> On Venus, you would be ${calc.venAge()} years old. You have lived ${calc.venYrsPast()} years past your expected lifespan on the second planet from the sun.</p>
      <p> On Mars, you would be ${calc.marsAge()} years old. You have lived ${calc.marsYrsPast()} years past your expected lifespan on the red planet.</p>
      <p> On Jupiter, you would be ${calc.jupAge()} years old. You have lived ${calc.jupYrsPast()} years past your expected lifespan bearing the weight of it's immense gravity.</p>`;
      $('#solar-age-response').html(solarSystemResponseYrsPast);
    }
  });
});
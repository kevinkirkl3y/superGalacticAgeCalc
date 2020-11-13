import Calc from "./../src/js/calc";

describe('Calc', () => {
  let calc;
  
  beforeEach(() => {
    calc = new Calc(31, 78.54);
  });

    test('Should create a class with a parameter for age', () => {
      expect(calc.age).toEqual(31);
    });
    test('Class should also contain parameter for life expectancy.', () => {
      expect(calc.lifeX).toEqual(78.54);
    });
    test('Should calculate age on mercury using inputted age.', () => {
      expect(calc.mercAge()).toEqual(7.44);
    });
    test('Should calculate age on Venus using inputted age.', () => {
      expect(calc.venAge()).toEqual(19.22);
    });
    test('Should calculate age on Mars using inputted age.', () => {
      expect(calc.marsAge()).toEqual(58.28);
    });
    test('Should calculate age on Jupiter using inputted age.', () => {
      expect(calc.jupAge()).toEqual(367.66);
    });
    test('Should caclulate the life expectancy on Mercury using inputted life expectancy.', () => {
      expect(calc.mercLifeX()).toEqual(18.85);
    });
    test('Should calculate the life expectancy on Venus using inputted life expectancy.', () => {
      expect (calc.venLifeX()).toEqual(48.69);
    });
    test('Should calculate the life expectancy on Mars using inputted life expectancy.', () => {
      expect(calc.marsLifeX()).toEqual(147.66);
    });
    test('Should calculate the life expectancy on Jupiter using inputted life expectancy.', () => {
      expect(calc.jupLifeX()).toEqual(931.48);
    });
    test('Should calculate the number years left to live on Mercury using inputted age and life expectancy.', () => {
      expect(calc.mercYrsLeft()).toEqual(11.41); 
    });
    test('Should calculate the number years left to live on Venus using inputted age and life expectancy.', () => {
      expect(calc.venYrsLeft()).toEqual(29.47);
    });
    test('Should calculate the number years left to live on Mars using inputted age and life expectancy.', () => {
      expect(calc.marsYrsLeft()).toEqual(89.38);
    });
    test('Should calculate the number years left to live on Jupiter using inputted age and life expectancy.', () => {
      expect(calc.jupYrsLeft()).toEqual(563.82);
    });

  let calc2;

  beforeEach(() => {
    calc2 = new Calc(80,78.54);
  });
    test('If inputted age is greater than inputted life expectancy it will calculate the number of years past life expectancy you will live on Mercury.', () => {
      expect(calc2.mercYrsPast()).toEqual(.35);
    });
    test('If inputted age is greater than inputted life expectancy it will calculate the number of years past life expectancy you will live on Venus.', () => {
      expect(calc2.venYrsPast()).toEqual(.91);
    });
    test('If inputted age is greater than inputted life expectancy it will calculate the number of years past life expectancy you will live on Mars.', () => {
      expect(calc2.marsYrsPast()).toEqual(2.74);
    });
    test('If inputted age is greater than inputted life expectancy it will calculate the number of years past life expectancy you will live on Jupiter.', () => {
      expect(calc2.jupYrsPast()).toEqual(17.32);
    });
});
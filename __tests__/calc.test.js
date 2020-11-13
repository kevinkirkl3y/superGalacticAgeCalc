import Calc from "./../src/js/calc";

describe('Calc', () => {
  let calc;
  
  beforeEach(() => {
    calc = new Calc(31);
  });

    test('should create a class with a parameter for age', () => {
      expect(calc.age).toEqual(31);
    });
    test('Should calculate age on mercury using inputted age.', () => {
      expect(calc.mercAge()).toEqual(7.44);
    });
    
    test('Should calculate age on Venus using inputted age.', () => {
      expect(calc.venAge()).toEqual(19.22)
    });
});
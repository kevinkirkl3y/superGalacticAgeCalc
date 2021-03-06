export default class Calc {
  constructor(age, lifeX) {
    this.age = age;
    this.lifeX = lifeX;
  }
  mercAge() {
    return Math.round((this.age * .24) * 1e2)/ 1e2;
  }
  venAge() {
    return Math.round((this.age * .62) * 1e2)/ 1e2;
  }
  marsAge() {
    return Math.round((this.age * 1.88) * 1e2)/ 1e2;
  }
  jupAge() {
    return Math.round((this.age * 11.86) * 1e2)/ 1e2;
  }
  mercLifeX() {
    return Math.round((this.lifeX * .24) * 1e2)/ 1e2;
  }
  venLifeX() {
    return Math.round((this.lifeX * .62) * 1e2)/ 1e2;
  }
  marsLifeX() {
    return Math.round((this.lifeX * 1.88) * 1e2)/ 1e2;
  }
  jupLifeX() {
    return Math.round((this.lifeX * 11.86) * 1e2)/ 1e2;
  }
  mercYrsLeft() {
    return Math.round((this.mercLifeX() - this.mercAge())*1e2)/1e2;
  }
  venYrsLeft() {
    return Math.round((this.venLifeX() - this.venAge())*1e2)/1e2;
  }
  marsYrsLeft() {
    return Math.round((this.marsLifeX() - this.marsAge())*1e2)/1e2;
  }
  jupYrsLeft() {
    return Math.round((this.jupLifeX() - this.jupAge())* 1e2)/1e2;
  }
  mercYrsPast() {
    return Math.round((this.mercAge() - this.mercLifeX())*1e2)/1e2;
  }
  venYrsPast() {
    return Math.round((this.venAge() - this.venLifeX())*1e2)/1e2;
  }
  marsYrsPast() {
    return Math.round((this.marsAge() - this.marsLifeX())*1e2)/1e2;
  }
  jupYrsPast() {
    return Math.round((this.jupAge() - this.jupLifeX())*1e2)/1e2;
  }
}
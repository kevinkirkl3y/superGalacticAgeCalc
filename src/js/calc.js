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
    return this.mercLifeX() - this.mercAge();
  }
  venYrsLeft() {
    return this.venLifeX() - this.venAge();
  }
  marsYrsLeft() {
    return this.marsLifeX() - this.marsAge();
  }
}
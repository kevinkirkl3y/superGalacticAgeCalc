export default class Calc {
  constructor(age) {
    this.age = age;
  }
  mercAge() {
    return Math.round((this.age * .24) * 1e2)/ 1e2;
  }
}
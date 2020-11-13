export default class Calc {
  constructor(age) {
    this.age = age;
  }
  mercAge() {
    return parseInt(this.age * .24).toFixed(2);
  }
}
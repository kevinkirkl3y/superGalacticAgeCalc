export default class Calc {
  constructor(age) {
    this.age = age;
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
}
function Cosmic(name, age) {
  this.name = name;
  this.age = age;
  this.mercuryAge;
  this.venusAge;
  this.marsAge;
  this.jupiterAge;
}

let myCosmo = new Cosmic("jack", 31);

Cosmic.prototype.convertAge = function () {
  mercuryAge = Math.floor(this.age / 0.24);
  venusAge = Math.floor(this.age / 0.62);
  marsAge = Math.floor(this.age / 1.88);
  jupiterAge = Math.floor(this.age / 11.86);
};

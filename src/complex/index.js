function Complex(...args) {
  if (args.length === 0) {
    this.a = 0;
    this.b = 0;
  } else if (args.length === 2) {
    let a;
    let b;
    [a, b] = args;
    this.a = a;
    this.b = b;
  } else {
    throw new Error('Must give either 0 or 2 inputs');
  }

  this.toJSON = function () {
    return this.toString();
  };

  this.add = function (z1, z2) {
    const z3 = new Complex(0, 0);
    z3.a = z1.a + z2.a;
    z3.b = z1.b + z2.b;
    return z3;
  };

  this.subtract = function (z1, z2) {
    const z3 = new Complex(0, 0);
    z3.a = z1.a - z2.a;
    z3.b = z1.b - z2.b;
    return z3;
  };

  this.conjugate = function () {
    return new Complex(this.a, -this.b);
  };

  this.getUnitX = function () {
    return new Complex(1, 0);
  };

  this.getUnitY = function () {
    return new Complex(0, 1);
  };

  this.modulus = function () {
    return Math.sqrt((this.a ** 2) + (this.b ** 2));
  };

  this.phaseAngle = function () {
    return Math.atan2(this.b, this.a);
  };

  this.toString = function () {
    if (this.b >= 0) {
      return `${this.a} + ${this.b}i`;
    }

    return `${this.a} - ${-1 * this.b}i`;
  };
}

p5.prototype.complex = function (...args) {
  let c;

  if (args.length === 0) {
    c = new Complex();
    return c;
  } else if (args.length === 2) {
    c = new Complex(args[0], args[1]);
    return c;
  }

  throw new Error('Must give either 0 or 2 arguments');
};

module.exports = p5;

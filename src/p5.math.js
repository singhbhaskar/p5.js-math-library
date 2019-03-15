p5.prototype.createMatrix = function () {
  let mat;

  const args = new Array(arguments.length);
  for (let i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }

  if (args.length === 0) {
    mat = new p5.Matrix();
    return mat;
  } else if (args[0] === 'mat3') {
    mat = new p5.Matrix(args[0]);
    return mat;
  } else if (args.length === 9) {
    mat = new p5.Matrix('mat3', args);
    return mat;
  } else if (args.length === 16) {
    mat = new p5.Matrix(args);
    return mat;
  } else {
    throw new Error('Input must be empty, "mat3", or an array of matrix elements');
  }
};

function Complex() {

  const args = new Array(arguments.length);
  for (let i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  
  if (args.length == 0) {
    this.a = this.b = 0; 
  }
  else if (args.length == 2) {
    this.a = args[0];  
    this.b = args[1]; 
  }
  else {
    throw new Error('Must give either 0 or 2 inputs'); 
  }

  this.toJSON = function() {
    return this.toString(); 
  }

  this.add = function(z1, z2) {
    let z3 = new Complex(0, 0);
    z3.a = z1.a + z2.a;
    z3.b = z1.b + z2.b;
    return z3;
  }

  this.subtract = function(z1, z2) {
    let z3 = new Complex(0, 0);
    z3.a = z1.a - z2.a;
    z3.b = z1.b - z2.b;
    return z3;
  }

  this.conjugate = function() {
    return new Complex(this.a, - this.b);
  }

  this.getUnitX = function() {
    return new Complex(1, 0);
  }

  this.getUnitY = function() {
    return new Complex(0, 1);
  }

  this.modulus = function() {
    return (this.a ** 2 + this.b ** 2) ** 0.5;
  }

  this.phaseAngle = function() {
    return Math.atan2(this.b, this.a); 
  }

  this.toString = function() {
    if (this.b >= 0) {
      return this.a + " + " + this.b + "i";
    }
    else {
      return this.a + " - " + (-1 * this.b) + "i"; 
    }
  }

};

p5.prototype.complex = function() {
  let c; 
  const args = new Array(arguments.length);
  for (let i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  if (args.length == 0) {
    c = new Complex(); 
    return c; 
  }
  else if (args.length == 2) {
    c = new Complex(args[0], args[1]); 
    return c; 
  }
  else {
    throw new Error('Must give either 0 or 2 arguments'); 
  }
}; 
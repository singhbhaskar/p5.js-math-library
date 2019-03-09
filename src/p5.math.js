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

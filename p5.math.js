p5.prototype.createMatrix = function () {
  let mat, m, n;

  try {
    mat = new p5.Matrix();
    m = arguments[0].length;
    n = arguments[0][0].length;

    const args = new Array(arguments.length);
    for (let i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    if (m !== n || (!m && !n)) {
      throw new Error('Matrix must be square');
    } else {
        mat.set(args[0]);
    }

    return mat;
  } catch (e) {
    if (e instanceof TypeError) {
      return mat;
    } else {
      throw new Error('Input must be empty or a 2D Array');
    }
  }
};

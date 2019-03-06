function setup() {
  noLoop();
}

function draw() {
  print('default');
  let a = createMatrix();
  print(a);

  print('2 x 2');
  let b = createMatrix([[1, 2], [3, 4]]);
  print(b);

  print('3 x 3');
  let c = createMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  print(c);

  print('4 x 4');
  let d = createMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
  print(d);

  print('non-square');
  createMatrix([[1, 2, 3], [4, 5, 6]]); // throws an error
}

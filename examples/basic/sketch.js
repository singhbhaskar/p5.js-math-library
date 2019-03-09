function setup() {
  noLoop();
}

function draw() {
  print('4x4 identity');
  let a = createMatrix();
  print(a);

  print('4 x 4');
  let b = createMatrix( 1,  2,  3,  4,
                        5,  6,  7,  8,
                        9, 10, 11, 12,
                       13, 14, 15, 16);
  print(b);

  print('3 x 3 identity');
  let c = createMatrix('mat3');
  print(c);

  print('3 x 3');
  let d = createMatrix(1, 2, 3,
                       4, 5, 6,
                       7, 8, 9);
  print(d);

  print('non-square');
  createMatrix(1, 2, 3, 4, 5, 6); // throws an error
}

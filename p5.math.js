p5.Matrix = class{

  // Constructor to create a New Matrix using dimension or by providing a 1D or 2D Array.
  // If the input to the constructor is dimensions of matrix then the row & col will
  // store the dimensions and the matrix is initialized with 0's.
  // And if a third argument is provided then a "Diagonal Matrix" is created using the provided value.
  // If the input is Array then its dimensions are stored in row & col and the array
  // is stored in matrix.
  // for any other input a Error is thrown.

  constructor(){
      if(arguments.length == 0){
          throw new Error("Input required either dimension of Matrix( row X colums) or a array!");
      }
      else if(arguments.length >= 2 && arguments.length <= 3){
          this.row = arguments[0];
          this.col = arguments[1];
          this.matrix = [];
          let temp = 0;
          if(arguments.length === 3)
              temp = arguments[2];
          for(let i=0; i<this.row; i++){
              let k = [];
              for(let j=0; j<this.col; j++){
                  if(i == j)
                      k.push(temp);
                  else
                      k.push(0);
              }
              this.matrix.push(k);
          }
      }
      else{
          if(arguments[0].length === 0){
              throw new Error("Empty array not permissible!");
          }
          let x = arguments[0];
          if(typeof x[0] === 'object'){
              this.col = x[0].length;
              this.row = x.length;
              this.matrix = x;
          }
          else{
              this.col = x.length;
              this.row = 1;
              this.matrix = [x];
          }

      }
  }

  // Return the Matrix after Addition of 2 Matrices
  static addMatix(x, y){
      let c = new Matrix(x.row, x.col);
      if(x.row !== y.row && x.col !== y.col)
          throw new Error("The Dimensions of the matrices doesn't match!");
      else{
          for (let i=0;i<x.row; i++){
              for(let j=0; j<x.col;j++)
                  c.matrix[i][j] = x.matrix[i][j] + y.matrix[i][j];
          }
          return c;
      }
  }

  // Return the Matrix after Subtraction of 2 Matrices
  static subMatix(x, y){
      let c = new Matrix(x.row, x.col);
      if(x.row !== y.row && x.col !== y.col)
          throw new Error("The Dimensions of the matrices doesn't match!");
      else{
          for (let i=0;i<x.row; i++){
              for(let j=0; j<x.col;j++)
                  c.matrix[i][j] = x.matrix[i][j] - y.matrix[i][j];
          }
          return c;
      }
  }

  // Returns a matrix with a scalar valued multiplied with Matrix
  static scalarMultiply(){
      if(arguments.length < 2){
          throw new Error("A Matrix and a scalar value is required")
      }
      else{
          let a = arguments[0];
          let x = arguments[1];
          let c = new Matrix(a.row, a.col)
          for(let i=0; i<a.row; i++)
              for(let j=0; j<a.col; j++)
                  c.matrix[i][j] = x*a.matrix[i][j];
          return c;
      }
  }

  // Returns the matrix with elements multiplied with -1
  static complement(a){
      return Matrix.scalarMultiply(a, -1);
  }

  // Returns the Transpose of a matrix
  static transpose(a){
      let b = new Matrix(a.col, a.row);
      for(let i=0; i<b.row; i++){
          for(let j=0; j<b.col; j++){
              b.matrix[i][j] = a.matrix[j][i];
          }
      }

      return b;
  }
}


// let t = new Matrix(3,3); <- Creates a 3X3 matrix with all values assigned to zero
// let t = new Matrix(3,2, 3); <- Creates a 3X2 matrix with diagonal elements as 3 but rest as 0 (zero)
// let t = new Matrix([[1,2], [3,1]]); Creates a 2X2 matrix with the given values

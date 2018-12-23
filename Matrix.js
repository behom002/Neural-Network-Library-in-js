//Creates a matrix
class Matrix{
  constructor(rows, columns){
    this.rows = rows;
    this.columns = columns;

    //is this a good idea?
    this.matrix = [];

    //Creates the actual matrix / every entry is 0
    for(let i = 0; i < this.rows; i++){
      this.matrix[i] = [];
      for(let j = 0; j < this.columns; j++){
        this.matrix[i][j] = 0;
      }
    }
  }

  //Add random numbers to a matrix
  randomize() {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

  //Adds a scale to every entry of the matrix
  mScaleAdd(scaleInput) {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.matrix[i][j] += scaleInput;
      }
    }
  }

  //Muliplies a scale to every entry of the matrix
  mScaleProduct(scaleInput) {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.matrix[i][j] *= scaleInput;
      }
    }
  }

  //Elementwise add two matrices
  //Requirement: Both matrices have the same dimensions
  mAdd(aMatrix) {
    if(this.matrix.length === aMatrix.matrix.length && this.matrix[0].length === aMatrix.matrix[0].length){
      for(let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.columns; j++){
          this.matrix[i][j] += aMatrix.matrix[i][j];
        }
      }
    } else{
      console.log("Not the same dimensions!");
    }
  }

  //Muliplies two matrices
  //Requirement: column count of first matrix must be the same as row count of second matrix
  mMatrixProduct(aMatrix){
    if(this.rows !== aMatrix.columns  && this.columns !== aMatrix.rows){
      console.log("Dimensions are not meeting the requirements!");
      console.log("Columns of A must match rows of B");
    } else{
      let result = new Matrix(this.rows, aMatrix.columns);
      for(let i = 0; i < result.rows; i++){
        for(let j = 0; j < result.columns;j++){
          //Do dotproduct of values in columns
          //result[i][j] = 0;
          for(let k = 0; k < aMatrix.colmuns; k++){
            result[i][j] += this.martrix[i][k] * aMatrix.matrix[k][j];
          }
        }
      }
      return result;
    }
  }


}

//Creates a matrix
class Matrix{
  constructor(rows, columns){
    this.rows = rows;
    this.columns = columns;

    //is this a good idea?
    this.data = [];

    //Creates the actual matrix / every entry is 0
    for(let i = 0; i < this.rows; i++){
      this.data[i] = [];
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] = 0;
      }
    }
  }

  //Add random numbers to a matrix
  randomize() {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  //Adds a scale to every entry of the matrix
  mScaleAdd(scaleInput) {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] += scaleInput;
      }
    }
  }

  //Muliplies a scale to every entry of the matrix
  mScaleProduct(scaleInput) {
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] *= scaleInput;
      }
    }
  }

  //Adds elementwise two matrices
  //Requirement: Both matrices have the same dimensions
  mAdd(aMatrix) {
    if(this.data.length === aMatrix.data.length && this.data[0].length === aMatrix.data[0].length){
      for(let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.columns; j++){
          this.data[i][j] += aMatrix.data[i][j];
        }
      }
    } else{
      console.log("Not the same dimensions!");
    }
  }

  //Muliplies two matrices
  //Requirement: column count of first matrix must be the same as row count of second matrix
  //returns a new Matrix-Object
  mMatrixProduct(aMatrix){
    if(this.rows !== aMatrix.columns  && this.columns !== aMatrix.rows){
      console.log("Dimensions are not meeting the requirements!");
      console.log("Columns of A must match rows of B");
    } else{
      let result = new Matrix(this.rows, aMatrix.columns);
      for(let i = 0; i < result.rows; i++){
        for(let j = 0; j < result.columns;j++){
          result.data[i][j] = 0;
          for(let k = 0; k < this.columns; k++){
            result.data[i][j] += this.data[i][k] * aMatrix.data[k][j];
          }
        }
      }
      return result;
    }
  }

  //returns a new Matrix-Object
  transpose(){
    let aMatrix = new Matrix(this.columns, this.rows);
    for(let i = 0; i < this.rows ; i++){
      for(let j = 0; j < this.columns; j++){
        aMatrix.data[j][i] = this.data[i][j];
      }
    }
    return aMatrix;
  }

  //the past parameter here is a function
  map(func){
    //Apply a function to every element of matrix
    for(let i = 0; i < this.rows; i++){
      for (let j = 0; j < this.columns; j++){
        let val = this.data[i][j]; //Gets value from position i,j of data
        this.data[i][j] = func(val); //writes the output of the called function
                                   //into the i,j position of data
                                   //-->function needs to work with data
      }
    }
  }

  print(){
    console.table(this.data);
  }

  //Use this method if console.table() output is not working correctly e.g. it
  // updates values even tho it should not
  printLong(){
    for(let i = 0; i < this.rows; i++){
      for (let j = 0; j < this.columns; j++){
        console.log(this.data[i][j]);
      }
    }
    console.log("\n");
  }

  //Static function which gets called Matrix.mMatrixProduct(a,b)
  static mMatrixProduct(firstMatrix, secondMatrix){
    if(firstMatrix.rows !== secondMatrix.columns  && firstMatrix.columns !== secondMatrix.rows){
      console.log("Dimensions are not meeting the requirements!");
      console.log("Columns of A must match rows of B");
    } else{
      let result = new Matrix(firstMatrix.rows, secondMatrix.columns);
      for(let i = 0; i < result.rows; i++){
        for(let j = 0; j < result.columns;j++){
          result.data[i][j] = 0;
          for(let k = 0; k < firstMatrix.columns; k++){
            result.data[i][j] += firstMatrix.data[i][k] * secondMatrix.data[k][j];
          }
        }
      }
      return result;
    }
  }

  //Creates just an input array from a NeuralNetwork perspective
  static fromArray(arr){
    let m = new Matrix(arr.length, 1);
    for(let i = 0; i < arr.length; i++){
       m.data[i][0] = arr[i]
    }
    return m;
  }

  static toArray(){
    let arr = [];
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
       arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

}

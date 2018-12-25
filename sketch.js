function setup(){
  //Test for mScaleAdd
    //!!!!! --> this works in a browser console but not here
    // why ?????
    //Update: it seems like console.table updates and only
    // displays the last time it got refreshed
    //  let a = new Matrix(2,3)
    //  console.table(a.data)
    //  console.log(a.data[1][1]) //here you can see that its zero
    //                            //but output of line above is something else
    //  a.mScaleAdd(2)
    // console.table(a.data)

  //Test for mMatrixProduct
    // let a = new Matrix(2,3);
    // a.randomize();
    // let b = new Matrix(3,2)
    // b.randomize();
    // console.table(a.data);
    // console.table(b.data);
    //
    // let c = a.mMatrixProduct(b);
    // console.table(c.data);

  //Test for map-function
    // let a = new Matrix(2,3);
    // a.randomize();
    // a.printLong();
    // //console.log("Before value: " + a.data[0][0]);
    //
    // function doubleIt(x){
    //   return x * 2;
    // }
    //
    // a.map(doubleIt)
    // //console.log("After value: " + a.data[0][0]);
    // a.printLong()

  //Test for fromArray
    // let arr = [3,2,-3];
    // Matrix.fromArray(arr);

  //Test Neural Network
    let nn = new NeuralNetwork(2,2,1);
    let input =  [1,0];
    let output = nn.feedforward(input);
    console.log(output);


}

function draw(){

}

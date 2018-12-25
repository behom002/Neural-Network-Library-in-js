function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork{
  //This will only support neural networks with 3 layers
  //Creates a neural network witch the given number of nodes
  constructor(numberInput, numberHidden, numberOutput){
    this.input_nodes = numberInput;
    this.hidden_nodes = numberHidden;
    this.output_nodes = numberOutput;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
    this.weights_ih.randomize();
    this.weights_ho.randomize();

    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes,1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(input_array){
    //Generating the hidden output
    let inputs = Matrix.fromArray(input_array);
    this.weights_ih.print();
    inputs.print();
    //TODO input works --> output hidden is NaN for some reason
    let hidden = Matrix.mMatrixProduct(this.weights_ih, inputs);
    hidden.printLong();
    hidden.print();

    //Maybe switch the function here
    hidden.mScaleAdd(this.bias_h);
    //activation function!
    hidden.map(sigmoid);
    //Generating the output
    let output = Matrix.mMatrixProduct(this.weights_ho, hidden);
    output.mScaleAdd(this.bias_o);
    output.map(sigmoid);

    return output;
  }


}

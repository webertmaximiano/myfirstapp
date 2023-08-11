import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { counter:0 } //variavel de estado que sera modificada

  //funcao que modifica a variavel de estado
  incrementCounter = ()=> {
    this.setState({counter:this.state.counter+1}); //pega a variavel de estado e soma +1
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    );
  }
}

export default App;
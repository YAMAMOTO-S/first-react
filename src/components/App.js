// import React, { Component } from 'react';


// function App() {
//   construnctor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }

//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }

// class Counter extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div>count: { this.state.count }</div>
//         <button>+1</button>
//         <button>-1</button>
//       </React.Fragment>
//     )
//   } 
// }

// export default App;
import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}
export default App;

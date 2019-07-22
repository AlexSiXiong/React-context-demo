import React from 'react';
import ReactDOM from "react-dom";
import "./styles.css";


const nContext = React.createContext();

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      x: {
        n: 10,
        setN: () => {
          this.setState({
            x: {
              ...this.state.x,
              n: this.state.x.n + 1
            }
          })
        }
      }
    }

  }

  render() {
    return (
        <div>
          <nContext.Provider value={this.state.x}>
            <Child1 />
          </nContext.Provider>
        </div>
    )
  }
}

const Child1 = () => (
  <div className='bordered'>
      Child 1
      <Child2 />
  </div>
)

const Child2 = () => (
    <div className='bordered'>
      Child 2
      <Child3/>
    </div>
)

const Child3 = () => (
    <div className='bordered'>
      Child 3
      <nContext.Consumer>
        {x => <Child4 n4={x.n} setN={x.setN} />}
      </nContext.Consumer>
    </div>
)

const Child4 = (props) => (
  <div className='bordered'>
    Child 4 gets number from App through 'Context', {props.n4}
    <button onClick={props.setN}>Click me +1</button>
  </div>
)

export default App;

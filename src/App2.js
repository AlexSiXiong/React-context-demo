import React, { Component } from 'react';
import "./styles.css";

const nContext = React.createContext();

class DataProvider extends Component {
    state = {
        number: 13,
    }

    addOne = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

    render() {
        console.log('render DataProvider')
        return (
            <nContext.Provider
                value = {
                    {
                        n: this.state.number,
                        addOne: this.addOne
                    }
                }
            >
                {this.props.children}
            </nContext.Provider>
        )
    }
}

const Child4 = () => {
    const { n, addOne } = React.useContext(nContext)
    return (
        <div className='bordered'>
            Child 4 Number {n}
            <button onClick={()=> addOne()}>add one</button>
        </div>
    )
}

const App2 = () => (
    <DataProvider>
        <Child1 />
    </DataProvider>
)

const Child1 = () => (

    <div className='bordered'>
        Child 1
        {console.log('child1')}
        <Child2 />
    </div>
)

const Child2 = () => (
    <div className='bordered'>
        Child 2
        {console.log('child2')}
        <Child3/>
    </div>
)

const Child3 = () => (
    <div className='bordered'>
        Child 3
        {console.log('child3')}
        <Child4 />
    </div>
)



export default App2;
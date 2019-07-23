import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2'
import "./styles.css";

const Container = () => (
    <div>
        <h3 className='App'>Button in box 2 only render component 'child 4'</h3>
        <h3 className='App'>Checking Console</h3>
        <h4>Box1</h4>
        <App />
        <h4>Box2</h4>
        <App2 />
    </div>
)
ReactDOM.render(<Container />, document.getElementById('root'));

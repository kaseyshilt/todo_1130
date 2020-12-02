
import './App.css';
import React, {Component} from 'react';
import {ToDoBanner} from './TODOBANNER';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class
  //  The export keyword above makes the class available for use outside of the JS file where it is created
 constructor() {
  super();

  //  React components have a special property called "state".  The "state" is used to define the state of data (props)
  this.state = {
    todoOwner: "Shawn Nelson",
    todoList: [
      {action: "Move burn pile", done: false},
      {action: "Oil change", done: false},
      {action: "Start x-mas shopping", done: false},
      {action: "Pay noveber sales tax", done: false},
      {action: "Eat breakfast", done: true}

    ]
  }
 }//end of ctor

  render = () =>
    <div>
      {/* features 1 & 2 */}
      <ToDoBanner
        todoOwner = {this.state.todoOwner}
        todoList = {this.state.todoList}
      />
    </div>

}// end of app

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log("APP CONSTRUCTOR CALLED");
    super(props);
    this.state = { isToggleOn: false };

    // Why we are binding toggleState function with "this"
    // Bind just returns a function that we can call later which contains reference to the first argument passed
    this.toggleState = this.toggleState.bind(this);
  }

  componentDidMount() {
    console.log("APP COMPONENT DID MOUNTED");
  }

  componentDidUpdate() {
    console.log("APP COMPONENT DID UPDATE");
  }

  toggleState(msg, e) {
    console.log(this);
    console.log(e);
    console.log(msg);
  }

  //WORKAROUND (USE ARROW FUNCTION) AND NO NEED OF BINDING IN CONSTRUCTOR
  /* 
    toggleState = () => {
      console.log(this);
    }
  */

  render() {
    console.log("APP RENDER CALLED");

    return (
      <button onClick={(e) => this.toggleState("toggling", e)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    )
  }
}

export default App;


/*

WHY this bind() is important?

-> Because this.toggleState when it is called , it lossed the context of current calling Component 
instance, by binding in constructor we make sure that while creeating component instance
all its methods are binded to current instance/object and has pointer to current instance

-> We can use arrow function to ignore bind() function as arrow function are lexically scoped
so arrow function scope is class in which they are defined , this they point to current instance




*/

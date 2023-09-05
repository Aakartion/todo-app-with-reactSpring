import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      My Hello world.
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

// This is function component
function SecondComponent(){
  return(
    <div className='SecondComponent'>
      Second Component
    </div>
  )
}

// This is Class component
class FirstComponent extends Component{
  render(){
    return (
      <div className='FirstComponent'>
        firstComponent
      </div>
    )
  }
}

export default App;

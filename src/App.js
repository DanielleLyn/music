import React, { Component } from 'react';
import './App.css';
// import AllMusic from './Components/AllMusic/AllMusic';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      Login
        <div className='All_Music'>
         {routes}
        </div>
      </div>
    );
  }
}

export default App;

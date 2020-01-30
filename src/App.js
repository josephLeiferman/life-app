import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron>
          <h1>Hello, world!</h1>
            <p>
              This is a landing page for Joseph Leiferman's React application.
            </p>
        </Jumbotron>
      </header>
    </div>
  );
}

export default App;

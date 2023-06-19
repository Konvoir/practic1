import React from "react";
import axios from 'axios';
import Counter from "./components/Counter";

function App() {

  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          
<Counter/>
        </div>
      </div>
    </div>
  );
}

export default App;

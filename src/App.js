import React, {useState} from "react";
// import axios from 'axios';
// import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('Текс и инпуте')


  return (
        <div className="app">
         <div className="post">
          <div className="post__content">
            <strong>1. Javascript</strong>
            <div>
            Javascript - мой любимый язык
            </div>
          </div>
         </div>

        </div>
        );
}

export default App;

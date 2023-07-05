import React, {useState} from "react";
import './styles/App.css'
// import axios from 'axios';
// import Counter from "./components/Counter";

function App() {
  // const [value, setValue] = useState('Текс и инпуте')


  return (
        <div className="App">
         <div className="post">
          <div className="post__content">
            <strong>1. Javascript</strong>
            
            <div>
            Javascript - мой любимый язык
            </div>
          </div>
          <div className="post__btns">
            <button>Удалить</button>
          </div>
         </div>

        </div>
        );
}

export default App;

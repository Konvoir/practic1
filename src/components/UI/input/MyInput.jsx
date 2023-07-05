import React from 'react';
import c from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input className={c.myInput} {...props}/>
            
        
    );
};

export default MyInput;
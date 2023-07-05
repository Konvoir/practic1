import React from 'react';
import c from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={c.myInput} {...props}/>
            
        
    );
});

export default MyInput;
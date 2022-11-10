import React from 'react';
import './itemCount.css';
import {useState} from 'react';

const ItemCount = () => {
    const [counter, setCounter]= useState(1)
    
    const modificarCounter = (operacion) => {
        if(operacion === "+"){
            if(counter<10)
                setCounter(counter+1)

        }else{
            if(counter>1)
                setCounter(counter-1)
        }
    }

    return (
        <div className='Counter1'>
            <button onClick={() =>modificarCounter("-")} className='btn'>-</button>
            {counter}
            <button onClick={() =>modificarCounter("+")} className='btn'>+</button>
            
        </div>
    );
}

export default ItemCount;

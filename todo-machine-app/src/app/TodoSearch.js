'use client';
import './TodoSearch.css'
import {useState} from 'react';

function  TodoSearch(){

    // useState is a function, state can be updated and consumed.
    // useState receive a default initial state to give to the first render
    const [searchValue, setSearchValue] = useState('');
    // setSearchValue is an special function to update the state.

    console.log("user wrote: "+ searchValue);

    return (
        <input 
        type="text"
        placeholder="Cortar cebolla" 
        className='TodoSearch'
        
        // value taken as the first render
        value={searchValue}

        // events MUST be handled by functions
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}
        />
    );
  }
  export { TodoSearch };
'use client';
import './TodoSearch.css'

function  TodoSearch(){
    return (
        <input type="text" placeholder="Cortar cebolla" 
        className='TodoSearch'
        // events MUST be handled by functions
        onChange={(event)=>{
  
            console.log('you wrote in the input:')
            console.log(event.target.value);
        }}
        />
    );
  }
  export { TodoSearch }
// 'use client';
import './TodoSearch.css'
// state changed to the main component to handle better the communication 
// between parent-child components.
function  TodoSearch({searchValue, setSearchValue}){

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
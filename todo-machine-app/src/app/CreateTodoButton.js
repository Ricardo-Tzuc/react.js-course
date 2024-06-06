/* Next.js needs this declaration in order to know
that this is a Client side render component. */
'use client';

import './CreateTodoButton.css'

// function to handle the click event.
function handleClick(){
    console.log('you clicked here');
}


function  CreateTodoButton(){
    return (
        // arrow functions can be used also in the onClick body.
        <button className='CreateTodoButton' onClick={handleClick}>+</button>
    );
  }

  export { CreateTodoButton }
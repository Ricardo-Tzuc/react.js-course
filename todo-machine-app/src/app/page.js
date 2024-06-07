"use client"; //imported in order to interact with the states as a parent component.

import { useState } from 'react'; 
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import styles from "./page.module.css";

// Array of objects to test tasks passed as props (Rendering Arrays)
const defaultTodos = [
  {text:'Cut Onion', completed: true},
  {text:'Take React.js course', completed:false},
  {text:'Cry while codding', completed:false},
  {text:'LALALAL', completed:false},
  {text:'completed handling states', completed:true},
]

//  Components are Capitalized
export default function Home() {
    // state to handle todos changes:
    const [todos, setTodos] = useState(defaultTodos);

    // this state (comes from TodoSearch) was moved to be created in the parent component:
    const [searchValue, setSearchValue] = useState('');
    // setSearchValue is an special function to update the state.

    /* this console.log is the prove that the communication
    between parent-child components. */
    console.log("user wrote: "+ searchValue);
    

    // derived states: variables/properties/calculations/ that comes from states.
    const completedTodos = todos.filter(todo => !!todo.completed).length; //counts the completed ones.
    const totalTodos = todos.length; // tells the total current tasks.
  return (
    <>
      <main className={styles.main}>
        {/* Now, TodoCounter receives the real values from the derived states */}
        <TodoCounter completed={completedTodos} total={totalTodos} />
        
        {/*Now, TodoSearch receives the state changes by props */}
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {/* Logic in JS to iterate in each element in the object
          and return arrays to be displayed. */}
          {defaultTodos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
          ))}
          {/* Rendering arrays by creating new TodoItems with Map,
          Map method creates new arrays. */}
        </TodoList>

        <CreateTodoButton />

      </main>
    </>

  );
}

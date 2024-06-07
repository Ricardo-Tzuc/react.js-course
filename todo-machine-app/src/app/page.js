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
    

    // derived states: variables/properties/calculations/ that comes from states.
    const completedTodos = todos.filter(todo => !!todo.completed).length; //counts the completed ones.
    const totalTodos = todos.length; // tells the total current tasks.

    // this derived state is used to filter the todos based on the user input.
    const searchedTodos = todos.filter( (todo) => {
      // iterated todo in lowercase
      const todoText = todo.text.toLowerCase();
      // input value in lowercase
      const searchedText = searchValue.toLowerCase();

      // does the todo with lower case match with the input in lowercase?
      return todoText.includes(searchedText);
    }
    )

    const completeTodos = (text) => {
      const newTodos = [...todos];
      const indexTodo = newTodos.findIndex(todo => todo.text == text);
      newTodos[indexTodo].completed = true
      setTodos(newTodos);
    }

  return (
    <>
      <main className={styles.main}>
        {/* Now, TodoCounter receives the real values from the derived states */}
        <TodoCounter completed={completedTodos} total={totalTodos} />
        
        {/*Now, TodoSearch receives the state changes by props */}
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {/* SearchedTodos is now the reference to display todos */}
          {searchedTodos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=>completeTodos(todo.text)}
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

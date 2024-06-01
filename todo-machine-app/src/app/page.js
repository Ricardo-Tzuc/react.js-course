import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import styles from "./page.module.css";

import React from 'react';
// Object to test tasks passed as props
const defaultTodos = [
  {text:'Cut Onion', completed:false},
  {text:'Take React.js course', completed:false},
  {text:'Cry while codding', completed:false},
  {text:'LALALAL', completed:false},
]



//  Components are Capitalized
export default function Home() {
  return (
    <React.Fragment>
        <main className={styles.main}>
      {/* Technique to Create fist the components structure,
      later create the components functions.*/}
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        {/* Logic in JS to iterate in each element in the object
        and return arrays to be displayed. */}
        {defaultTodos.map(todo => (
          <TodoItem
          // key={todo.key}
          text={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      </main>
    </React.Fragment>

  );
}

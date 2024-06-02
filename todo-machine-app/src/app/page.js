import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import styles from "./page.module.css";

// Object to test tasks passed as props (Rendering Arrays)
const defaultTodos = [
  {text:'Cut Onion', completed: true},
  {text:'Take React.js course', completed:false},
  {text:'Cry while codding', completed:false},
  {text:'LALALAL', completed:false},
  {text:'LALALAL', completed:false},
]



//  Components are Capitalized
export default function Home() {
  return (
    <>
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

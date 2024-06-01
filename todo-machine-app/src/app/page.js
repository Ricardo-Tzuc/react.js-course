import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import styles from "./page.module.css";

//  Components are Capitalized
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Technique to Create fist the components structure,
      later create the components functions.*/}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton />

    </main>
  );
}
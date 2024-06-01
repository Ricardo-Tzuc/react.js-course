import styles from "./page.module.css";

//  Components are Capitalized
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1> Hello World!</h1> -React Elements */}
      <h1> Hello World!</h1>
     <TodoItem />
     <TodoItem />
     <TodoItem />


      {/*This is an example component which receives "props"
      props: properties written as objects which helps
      to be more dynamic our applications  */}
     <TodoCount
     completed={8}
     total={16}
     />
     <TodoCount
     completed={10}
     total={14}
     />
    </main>
  );
}

// New Component
function  TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>Cry while codding</p>
      <span>X</span>
    </li>
  );
}
// Component with Props
function TodoCount(props) {
  return(
    <h1>
      You completed {props.completed} of {props.total} TODOs
    </h1>
  )
}
const styles = {
  backgroundColor: 'red'
}


function  TodoCounter({total, completed}){
    return (
      <h1 style={styles}>
        You have completed {completed} of {total} TODOS
      </h1>
    );
  }

  export { TodoCounter }
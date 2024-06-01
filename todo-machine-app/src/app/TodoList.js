function  TodoList(props){
    return (
        <ul>
            {/* React transforms the children property
            as the elements inside the parent tag. */}
            {props.children}
        </ul>
    );
  }

  export { TodoList }
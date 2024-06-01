function  TodoList({children}){
    return (
        <ul>
            {/* React transforms the children property
            as the elements inside the parent tag. */}
            {children}
        </ul>
    );
  }

  export { TodoList }
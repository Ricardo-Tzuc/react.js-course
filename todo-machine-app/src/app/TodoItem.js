// Component list items
function  TodoItem(props){
    return (
      <li>
        <span>V</span>
        <p>{props.text} {String(props.completed)}</p>
        <span>X</span>
      </li>
    );
  }
export { TodoItem }  
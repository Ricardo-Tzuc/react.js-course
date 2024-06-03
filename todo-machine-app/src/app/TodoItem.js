// Component list items
import './TodoItem.css'
function  TodoItem(props){
    return (
      <li>
        <span className='done'>V</span>
        <p>{props.text} {String(props.completed)}</p>
        <span className='delete'>X</span>
      </li>
    );
  }
export { TodoItem }  
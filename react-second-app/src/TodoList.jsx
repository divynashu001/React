import { useState } from "react"
import {v4 as uuidv4} from "uuid";
export default function TodoList(){
let [todos, setTodos]= useState([{task:"sample Task", id: uuidv4()}])
let [newTodo, setNewTodo]=useState("")
let addNewTask=()=>{
    setTodos([...todos, {task:newTodo, id:uuidv4()}])
    setNewTodo("");
}
let deleteCopy = (id)=>{
    setTodos(todos.filter((todo)=>todo.id != id))
}

let updateTodoValue =(event)=>{
    setNewTodo(event.target.value)
}
    return( 
        <div>
        <input type="text" placeholder="add something" value={newTodo} onChange={updateTodoValue}/>
        <br /> <br />
        <button onClick={addNewTask}>Add Task</button>
        <hr />
        <h4>Task Todo</h4>
        <ul>
        {todos.map((todo)=>(
                <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteCopy(todo.id)}>Delete</button>
                    </li>
        ))}
        </ul>
        
        </div>
    )
}
import { useState } from "react"
import {v4 as uuidv4} from "uuid";
export default function TodoList(){
let [todos, setTodos]= useState([{task:"sample Task", id: uuidv4(), isDone:false}])
let [newTodo, setNewTodo]=useState("")
let addNewTask=()=>{
    setTodos([...todos, {task:newTodo, id:uuidv4(), isDone:false}])
    setNewTodo("");
}
let deleteCopy = (id)=>{
    setTodos(todos.filter((todo)=>todo.id != id))
}

let updateTodoValue =(event)=>{
    setNewTodo(event.target.value)
}

let MarkAsDoneAll = ()=>{
    setTodos((todos)=>(
        todos.map((todo)=>{
        return{
            ...todo,
            isDone:true,
            // task: todo.task.toUpperCase()
        }

    })))
}

let markAsDone = (id) =>{
    setTodos((todos)=>(
        todos.map((todo)=>{
            if(todo.id === id){
                return{
                    ...todo,
                    // task: todo.task.toUpperCase()
                    isDone:true,
                };
            }
            else{
                return todo;
            }
        })
    ))
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
                    <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteCopy(todo.id)}>Delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                    </li>
        ))}
        </ul>
        <button onClick={MarkAsDoneAll}>Mark As Done All</button>
        
        </div>
    )
}
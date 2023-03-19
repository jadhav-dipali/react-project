import React,{ useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css"




export default function TodoForm(){

    const [ input , setInput] = useState("");
    const [task , setTask] = useState([]);
    const [done , setDone] = useState(false)

    function submitForm(e){
        e.preventDefault();
        // console.log(input)
        console.log(done)//
        if(done){

      setTask(  task.map(ele=>{
        if(ele.id=== done){
         return {...ele , todotask:input}
        }
        return ele;
      }))
        setDone(false)
        setInput("")
        }
        else{
            setTask(data=>([...data, {id:new Date().getTime(),  todotask:input}]))
            setInput("")
        }

      
}
     return<>
      <h1><i>!!!The Todo-App!!!</i></h1>
     <div className="parent">
     <form onSubmit={submitForm}>
       <input type="text" placeholder="Enter Your Todo  Task ...."  onChange={(e)=>setInput(e.target.value)} value={input} id="input" ></input>
       <button type="submit" className="btn" id="btn-add">Add</button>
    </form>
    <TodoList task= {task}  setTask={setTask} setDone={setDone}  setInput={setInput}/>
    
     </div>
     </>
}
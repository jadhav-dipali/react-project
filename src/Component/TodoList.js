import "./Todo.css";


 export default function TodoList({task, setTask, setDone,setInput}){
     
        function onDelete(id){
             setTask(task.filter(t=> t.id!==id));
            }

    return<>
    <ul>
      {task.map(data=>
        {
            return ( <li key={data.id}> {data.todotask}
{/* {console.log({task})} */}
            <button onClick={()=>{setDone(data.id) ;setInput(data.todotask) }} className="btn" id="btn-edit">Edit</button>
            <button onClick={()=>onDelete(data.id)} className="btn" id="btn-del">Delete</button>
            </li>)
        })}
    </ul>
    </>
}



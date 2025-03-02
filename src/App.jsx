import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [page, setPage] = useState("index");
  const[toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleChange =(e) =>{
    setToDo(e.target.value);
  }
  const handleAdd = () => {
    if(toDo.trim() !== ""){
      const newToDo = { id: Date.now(), text: toDo };
    console.log("Yeni To-Do Eklendi:", newToDo); 
    setToDos([...toDos, newToDo]); 
    setToDo(""); 
    setPage("index"); 
    }
  }

  return (
    <>
      <div className='header-container'>
        <button onClick={() => setPage("index")}>ToDo App</button>
        <i class="fa-solid fa-list-check"></i>
      </div>
      <div className='page-container'>
        {
          page === "index" && (
            <>
              <div className="lists">
                <ul>
                  {toDos.map((todo) => (
                    <li key={todo.id} className="list-ToDo">
                      {todo.text} 
                      <div className="list-btn-container">
                        <button><i className="fa-solid fa-pencil"></i></button>
                        <button><i className="fa-solid fa-trash-can"></i></button>
                        <button><i className="fa-solid fa-circle-check"></i></button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            <div className="add-btn-container">
              <button onClick={() => setPage("AddToDo")} className='add-Btn'>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </>
            
          )
        }
        {
          page === "AddToDo" && (
            <div className="addToDo-container">
              <input type="text" placeholder='Add To Do' name='toDo' value={toDo} onChange={handleChange}/>
              <button onClick={handleAdd}>Add</button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App

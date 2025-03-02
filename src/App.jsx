import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [page, setPage] = useState("index");
  const[toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editToDo, setEditToDo] = useState(null);

  const handleChange =(e) =>{
    setToDo(e.target.value);
  }
  const handleAdd = () => {
    if(toDo.trim() !== ""){
      const newToDo = { id: Date.now(), text: toDo };
      setToDos([...toDos, newToDo]); 
      setToDo(""); 
      setPage("index"); 
    }
  }
  const deleteTask = (id) =>{
    const filterTask = toDos.filter((todo) => todo.id !== id);
    setToDos(filterTask);
  }

  const editTask = (todo) => {
    setEditToDo(todo);
    setPage("editPage");
  }

  const handleUpdate = () => {
    setToDos(
      toDos.map(todo => todo.id === editToDo.id ? {...todo, text: editToDo.text} : todo)
    )
    setEditToDo("");
    setPage("index");
  }
  const handleCancel = () =>  {
    setPage("index");
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
                        <button onClick={() => editTask(todo)}><i className="fa-solid fa-pencil"></i></button>
                        <button onClick={() => deleteTask(todo.id)}><i className="fa-solid fa-trash-can"></i></button>
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
              <input type="text" placeholder='Title...' name='toDo' value={toDo} onChange={handleChange}/>
              <button onClick={handleAdd}>ADD</button>
            </div>
          )
        }
        {
          page === "editPage" && (
            <>
              <div className='edit-page-container'>
                <input type="text" placeholder='Edit Title...'
                value={editToDo.text}
                onChange={(e) => setEditToDo({...editToDo, text: e.target.value})}/>
                <div className="edit-page-btns">
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default App

import Lista from './components/Lista';
import './App.css'

function App() {
 

  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
       <h2>To Do List</h2>
      </div>
      <div className='principal'>
          <h1>Mis Tareas</h1>
          <Lista />
      </div>
    </div>
  )
}

export default App

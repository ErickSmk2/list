import { useState }from "react";
import Formulario from './Formulario';
import '../css/lista.css';
import Tarea from "./Tarea";



function Lista(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto){
            const tareaNueva = [tarea, ...tareas];
            setTareas(tareaNueva);
        }else{
            alert('Ingrese una tarea');
        }
    }

    const eliminarTarea = id => {
        const tareaNueva = tareas.filter(tarea =>
            tarea.id !== id);
            setTareas (tareaNueva);
    }

    const completarTarea = id => {
        const tareaNueva = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareaNueva);
    }

    return(
        <>
        <Formulario onSubmit={agregarTarea}/>
        <div className="tareas-lista">
            {
                tareas.map((tarea =>
                    <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea}
                    />
                    )) 
            }
        </div>
        </>
    );
}

export default Lista;
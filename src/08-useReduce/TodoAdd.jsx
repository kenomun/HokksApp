import { useReducer } from "react"
import { useForm } from "../hooks/useForm"
import { todoReducer } from "./TodoReducer"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit= ( event ) =>{
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    };

  return (

    <form onSubmit={ onFormSubmit }>
        <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-3"
            >
            Agregar
        </button>
    </form>
    
  )
}


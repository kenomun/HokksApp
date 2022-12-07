
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount,  handleNewTodo, handleDeleteTodo, handleToggleTodo  } = useTodo();

    return (
        <>
            <h1>TodoApp:  { todosCount }, <small>Pendientes: { pendingTodosCount } </small></h1>
            <hr />

            <div className="row">
                <div className="col-6">
                    <TodoList 
                        todos = { todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd
                         onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}

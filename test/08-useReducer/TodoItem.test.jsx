import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReduce/TodoItem";


describe('Prueba del componente <TodoItem/>', () => {

    const  todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el Todo pendiente de completar', () => { 

        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo= { onDeleteTodoMock }/>)

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')
        screen.debug();
    })

    test('debe mostrar el Todo completado', () => { 

        todo.done = true;

        render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo= { onDeleteTodoMock }/>)

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('text-decoration-line-through')
        screen.debug();
    })

    test('el span debe llamar a toggle al presionar click', () => { 

        render(<TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo= { onDeleteTodoMock }
            />)

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    })

    test('el botton debe llamar al onDeleteTodo', () => { 

        render(<TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo= { onDeleteTodoMock }
            />)

        // const deleteButton = screen.getByRole('button');
        const deleteButton = screen.getByLabelText('button');
        fireEvent.click( deleteButton );


        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    })


 })
import { render, screen } from '@testing-library/react'
import { doesNotMatch } from 'assert'
import { TodoApp } from '../../src/08-useReduce/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en el componente <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id:1, description: 'todo #1', done: false},
            {id:2, description: 'todo #2', done: true},
        ],
        todosCount: 2,
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(),  
        handleToggleTodo: jest.fn(), 
    })

    test('debe de mostrar el componente correctamente', () => { 

        render( < TodoApp /> );
        screen.debug();
        expect( screen.getByText('todo #1') ).toBeTruthy();
        expect( screen.getByText('todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

     })


 })
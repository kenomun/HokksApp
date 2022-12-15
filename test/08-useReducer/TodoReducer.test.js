import { hasUncaughtExceptionCaptureCallback } from "process";
import { todoReducer } from "../../src/08-useReduce/TodoReducer"


describe('pruebas en todo reducer', () => { 
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        donde: false,
    }]

    test('deber de regresar el estado incial', () => { 

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState )

    })

    test('Agregar un Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo #2',
                donde: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( action.payload )

    })

    test('Debe eliminar un todo', () => { 

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 )

    })

    test('debe de realizar el toggle del todo', () => { 

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

    })

 })
import { renderHook, act }  from '@testing-library/react';
import { useForm } from '../src/hooks/useForm'

describe('Prueba en el useForm', () => { 

    const initialform = {
        name: 'juan',
        email: 'juan@gmail.com'
    }

    test('Debe regresar los valores pro defecto', () => {

        const { result } = renderHook( () => useForm(initialform) );
        
        expect( result.current ).toEqual({
            name: initialform.name,
            email: initialform.email,
            formState: initialform,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });

        
    });

    test('Debe cambiar nombre con onInputChange', () => {

        const newValue= 'keno'
        const { result } = renderHook( () => useForm(initialform) );
        const { onInputChange } = result.current;

        act( () =>{
            onInputChange({target: {name:'name', value: newValue}})
        });
        console.log(result.current)

        expect( result.current.name ).toBe('keno');
        expect( result.current.formState.name ).toEqual('keno');
        
    });

    test('Debe  hacer reset del formulario', () => {

        const newValue= 'pablo'
        const { result } = renderHook( () => useForm(initialform) );
        const { onInputChange, onResetForm } = result.current;

        act( () =>{
            onInputChange({target: {name:'name', value: newValue}})
            onResetForm(initialform)

        });
        
        expect( result.current.name ).toBe('juan');
        expect( result.current.formState.name ).toEqual('juan');
        
    });

 });
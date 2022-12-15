import { render } from '@testing-library/react';
import second, { MultipleCustomHook } from '../../../src/03-examples/MultipleCustomHook';

describe('Pruebas en <MultipleCustomHooks/>', () => { 

    test( 'debe de mostrar el componente por defecto', () => { 


        render(<MultipleCustomHook />);
        screen.debug();

    });

    // test( '',() => {

    // });

    // test( '',() => {

    // });

 });



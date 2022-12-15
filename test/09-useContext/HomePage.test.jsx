import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"


describe('Prueba en el componenet < HomePage />', () => { 

    const user  = {
        id: 1,
        name: 'keno',
    }

    test('debe de mostrar el componente sin usuarios', () => { 

        render( 
            <UserContext.Provider value={{ user: null }}>
                < HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')
        console.log( preTag.innerHTML );
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug();

     })

     test('debe de mostrar el componente sin usuarios', () => { 

        render( 
            <UserContext.Provider value={{ user: null }}>
                < HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')
        console.log( preTag.innerHTML );
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug();
     })

     test('debe de mostrar el componente con el  usuarios', () => { 

        render( 
            <UserContext.Provider value={{ user }}>
                < HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')
        console.log( preTag.innerHTML );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
;
        // screen.debug();
     })


 })
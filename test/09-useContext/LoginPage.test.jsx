import { fireEvent, render, screen } from "@testing-library/react"
import { hasUncaughtExceptionCaptureCallback } from "process"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Prueba sen el componente <Loginpage/>', () => {


    test('Debe llamar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toBe('null')

     })

     test('debe llamar al setUser cuando se hace click', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        )
        screen.debug();

        const setButton = screen.getByRole('button');
        fireEvent.click( setButton );

        expect( setUserMock ).toHaveBeenCalledWith({ "email": "juqn@gmail.com", "id": 12, "name": "juan" } )


     })


})
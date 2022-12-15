import { render, screen } from "@testing-library/react"
import { hasUncaughtExceptionCaptureCallback } from "process"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en <mainApp/>', () => { 
    
   test('Debe mostrara el HomePage', () => { 

    render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
    )

    screen.debug();
    expect(screen.getByText('HomePage')).toBeTruthy();

    }) 

    test('Debe mostrara el HomePage', () => { 

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
    
        screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    
        }) 
    

 })
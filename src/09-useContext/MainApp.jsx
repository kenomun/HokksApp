import { Navigate, Route, Routes} from "react-router-dom"
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { ErrorPage } from './ErrorPage'
import { Navbar } from "./Navbar"
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {

  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
            <Navbar/>
        <hr />


        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="about" element={ <AboutPage/> } />
            <Route path="login" element={ <LoginPage/> } />
            <Route path="error" element={ <ErrorPage/> } />


            {/* <Route path="/*" element={ <LoginPage/> } /> */}
            <Route path="/*" element={ <Navigate to="/error"/> }/>
        </Routes>
    
    </UserProvider>
  )
}

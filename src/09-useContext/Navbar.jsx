import {  Link, NavLink } from "react-router-dom"


export const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">

        <NavLink className="navbar-brand" to="/">useContext</NavLink>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={ ({ isActive }) =>  `nav-link ${ isActive ? 'active' : '' }`} to="/login">Login</NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

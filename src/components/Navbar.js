import React from "react"
import { Link } from "react-router-dom";
import "../css/NavBar.css"


function Navbar(){

    return(
      <>
  
            <div>
                <h1 className="topBanner">Adam Ortolf</h1>
            </div>
          <nav className="navBar">
            <ul>
                <li className="navItem">
                <Link to="/">Home</Link>
                </li>

                <li className="navItem">
                <Link to="/Contact">Contact</Link>
                </li>

                <li className="navItem">
                <Link to="/Portfolio">Portfolio</Link>
                </li>
              </ul>
          </nav>
      </>
    )
}

export default Navbar;
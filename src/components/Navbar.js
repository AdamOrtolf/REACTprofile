import React from "react"
import { Link } from "react-router-dom";


function Navbar(){

    return(
      <>
  
            <div>
                <h1>Adam Ortolf</h1>
            </div>
          <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">Contact</a>
                </li>
                <li className="nav-item">
                <Link to="/Portfolio">Portfolio</Link>
                </li>
              </ul>
          </nav>
      </>
    )
}

export default Navbar;
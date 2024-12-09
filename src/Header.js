import React from 'react'
import './index.css'
import './App.css'
import logo from './images/tree-logo.png';
{/*import { BrowserRouter as Link } from "react-router-dom";*/}

const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="container bg-success text-white">
          <div className="row mb-4">
              <div className="col-sm-12 d-flex justify-content-sm-center align-items-sm-center gap-4 p-3">
                <img src={logo} alt="company logo" />
                <h2>Divisa Currency Converter</h2>
              </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}



//export default Header;
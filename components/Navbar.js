import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav id='nav' className= {`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{color:props.mode==='dark'?'white':"#042743"}} to="/TextWizard/"><strong>TextWizard</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand" style={{color:props.mode==='dark'?'white':"#042743"}} to="/About">About</Link>
        </li>
        <li>
        <div id='switch' className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={props.enable} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>Change theme</strong></label>
          </div>
        </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, }
Navbar.defaultProps = { title: 'default' };


import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
  return (
 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Weather Forecasters
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-controls="navbarNavDropdown"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/weather">
                Weather
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/location">
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header
import React from 'react'

const header = (props) => {

  let changeMode = props.lightMode ? "dark": "";
    
  return (
    <nav className={`app-header ${changeMode}`}>
      <h1>Note List</h1>
      <div 
          className="toggler"
      >
          <p className="toggler--light">Dark</p>
          <div 
              className="toggler--slider"
              onClick={props.togglelightMode}
          >
              <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Light</p>
      </div>
    </nav>
  )
}

export default header

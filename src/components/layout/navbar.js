import React from 'react'

const Navbar = ({icon , title}) => {

    return (
      <div>
      <nav className='navbar bg-primary'>
            <h1>
            <i className={icon} style={{marginRight:'10px'}} />
            {title}
            </h1>
      </nav>
      </div>
    );

}

Navbar.defaultProps = {
  title : "Github Finder",
  icon : "fa fa-github"
}


export default Navbar

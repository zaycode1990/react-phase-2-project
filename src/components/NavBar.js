import React from 'react'
import {useNavigate} from 'react-router-dom'

function NavBar() {

  const nav = useNavigate()




function navigate(e) {
    // don't make a GET request
    e.preventDefault();
    // use pushState to navigate using the href attribute of the <a> tag
      nav(`/${e.target.textContent.toLowerCase()}`)
  }

  return (
    <nav className="navBar">
      <a href="/" onClick={navigate}>
        Home
      </a>
      <a href="/inventory" onClick={navigate}>
        Inventory
      </a>
      <a href="/cart" onClick={navigate}>
        Cart
      </a>
    </nav>
  );
}
export default NavBar
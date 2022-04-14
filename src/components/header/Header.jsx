import React from 'react'
import Button from '../button/Button'
import NavItem from './NavItem'
import './_header.scss'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {
return (
<header id='header'>
  <div className="container d-flex justify-content-between align-items-center">
    <div className="logo">
      <h1>Logo</h1>
    </div>
    {/* Logo division end */}
    <nav className="nav-menu">
      <ul className='list-unstyled m-0 d-flex'>
        {/* NavItem elements it comes from here ==> components/header/NavItem.jsx */}
        <NavItem navContent="Home" to="/" />
        <NavItem navContent="Products" to="/Products" />
        <NavItem navContent="About" to="/About" />
        <NavItem navContent="Contact" to="/Contact" />
      </ul>
    </nav>
    {/* Nav menu end */}
    <div className="all-btn">
      <div className="d-flex align-items-center">
      <div className="sign-in-content btn-cls">
      <Button className="btn btn-primary d-flex align-items-center m-0"><Icon.BoxArrowInRight/> Sign in</Button>
       {/* Button elements it comes from here ==> components/button/Button.jsx */}
    </div>
    {/* Sign in content end */}
    <div className="register-content btn-cls">
      <Button className="btn btn-success d-flex align-items-center m-0"><Icon.PersonPlusFill/> Register</Button>
       {/* Button elements it comes from here ==> components/button/Button.jsx */}
    </div>
    {/* Register content end */}
    <div className="cart-content btn-cls">
      <Button className="btn btn-dark d-flex align-items-center m-0"><Icon.CartCheckFill/> (0)</Button>
       {/* Button elements it comes from here ==> components/button/Button.jsx */}
    </div>
    {/* Cart content end */}
      </div>
    </div>
  </div>
</header>
)
}

export default Header
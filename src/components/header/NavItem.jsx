import React from 'react'
import PropTypes from 'prop-types'
import './_navItem.scss'
import { NavLink } from 'react-router-dom'


const NavItem = (props) => {
  return (
    //header navigation item dynamic component
    <li className="nav-item">
      <NavLink activeclassname="active" to={props.to}>{props.navContent}</NavLink>
    </li>
  )
}

NavItem.propTypes = {
  navContent: PropTypes.string.isRequired
}

export default NavItem
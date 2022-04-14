import React from 'react'
import PropTypes from 'prop-types'
import './_button.scss'

const Button = (props) => {
return (
<button className={`button ${props.className}`} onClick={props.onClick ? ()=> props.onClick() : null}>
    {props.children}
</button>
)
}

Button.propTypes = {
onclick: PropTypes.func
};

export default Button
import React from 'react'
import './_productItem.scss'

const ProductItem = (props) => {
return (

<div key={props.myVal} id={props.myVal} className="card card-item h-100 ">
    <img src={props.src} alt="card-img-top" className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title">{props.title.substring(0,12)}</h5>
        <button className="btn btn-outline-success">{props.buttonText}</button>
        <span className="px-3 py-1 rounded bg-danger text-light cursor-default">{props.price}</span>
    </div>
</div>

)
}

export default ProductItem
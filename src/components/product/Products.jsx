import React, {  useEffect} from 'react'
import ProductItem from './ProductItem'
import Button from '../button/Button'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actions/action'
import Loading, { LoadingHead } from '../loading/Loading'

const Products = (props) => {
useEffect(() => {
return props.getProducts()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
return (
<div className='products'>
  <div className="container">
    <div className="products-head d-flex justify-content-center align-items-center my-5">
      <h1 className='font-weight-bold'>New Products</h1>
    </div>
    <hr />
    <>
      <div className="productsFilterBtn">
        <div className="container">
          <div className="row align-items-center">
            {
              props.isLoading? <LoadingHead /> : (
                <>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <Button className='btn btn-outline-dark w-100'>All</Button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <Button className='btn btn-outline-dark w-100'>Women</Button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <Button className='btn btn-outline-dark w-100'>Men Closing</Button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <Button className='btn btn-outline-dark w-100'>Electronics</Button>
            </div>
              </>
              )
            }

          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center">

        {
        props.isLoading? (<Loading/>) :(
        props.products.map((item) => {
        return(
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
          <ProductItem key={item.id} myVal={item.id} src={item.image} title={item.title} buttonText={ `Add to Cart`}
            price={item.price + "$" } />
        </div>
        );
        })
        )

        }


      </div>
    </>
  </div>
</div>
)
}

const mapStateToProps = (state) => {
return {
products: state.products,
isLoading: state.isLoading,
}
}

export default connect(mapStateToProps, {getProducts})(Products)
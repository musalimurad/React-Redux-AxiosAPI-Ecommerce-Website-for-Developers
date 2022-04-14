import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Loading(){

return (

<div className="container">

  <div className='my-5 row justify-content-between align-items-center'>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={450} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
      <Skeleton height={450} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={450} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={450} />
    </div>

  </div>

</div>
)
}


export const LoadingHead = () => {

return (
<div className="container">

  <div className=' row justify-content-between align-items-center'>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={40} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
      <Skeleton height={40} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={40} />
    </div>

    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <Skeleton height={40} />
    </div>

  </div>

</div>
)
}
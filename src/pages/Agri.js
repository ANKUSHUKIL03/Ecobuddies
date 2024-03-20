import React from 'react'
import img1 from './img1.png'
const Agri = () => {
  return (
    <div>
        <div className="d-flex justify-content-center">
    <div className="card-deck">
      {/* First Card */}
      <div className="card mb-3" style={{ maxWidth: "700px", boxShadow: "2px 2px red" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img1} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">KabarDo</h5>
              <p className="card-text">Transforming Waste into Opportunity: Recycle Plastic, Preserve Our Plane</p>
              <div><button className='btn btn-warning'>BUY NOW</button></div>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Second Card */}
      <div className="card mb-3" style={{ maxWidth: "700px", boxShadow: "2px 2px red" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img1} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Sealed Air</h5>
              <p className="card-text">believe in pure packaging</p>
              <div><button className='btn btn-warning'>BUY NOW</button></div>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Third Card */}
      <div className="card mb-3" style={{ maxWidth: "700px", boxShadow: "2px 2px red" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img1} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">ReUseUs</h5>
              <p className="card-text">Reduce, Reuse, Recycle</p>
              <div><button className='btn btn-warning'>BUY NOW</button></div>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Agri

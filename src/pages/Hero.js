import React from 'react';
import Slider from './Slider';
import Plastic from './plas.webp';
import Agri from './agri.jpg';
import Elec from './ewaste.webp';
import Indus from './indus.jpg';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
     const navigate = useNavigate();

  function handleNavigateToHero1() {
    navigate("/Plastic");
  }
  function details2(){
	navigate("/Agri");
  }
  function details3(){
	navigate("/Electronic");
  }
  function details4(){
	navigate("/Industries");
  }
  return (
    <div style={{ backgroundColor: "grey" }}>
		<Slider/>
        <h1 style={{ color: "white", textAlign: "left", fontFamily:"",textShadow:"2px 2px red" ,marginLeft:"39px"}}>Purchase By Category</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
        <div className="col">
          <div className="card h-100 mx-5" style={{ boxShadow: "2px 4px black" }}>
            <img src={Plastic} className="card-img-top" style={{ height: "200px", width: "600px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>PLASTIC WASTE</b></h5>
              <button className="btn btn-success" onClick={handleNavigateToHero1}>VIEW DETAILS</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 mx-5" style={{ boxShadow: "2px 4px black" }}>
            <img src={Agri} className="card-img-top" style={{ height: "200px", width: "400px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>AGRICULTURAL WASTE</b></h5>
              
              <button className="btn btn-success" onClick={details2}>VIEW DETAILS</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mx-5" >
            <img src={Elec} className="card-img-top " style={{ height: "200px", width: "400px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>ELECTRONIC WASTE</b></h5>
              
              <button className="btn btn-success" onClick={details3}>VIEW DETAILS</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mx-5" style={{ boxShadow: "2px 4px black" }}>
            <img src={Indus} className="card-img-top" style={{ height: "200px", width: "600px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title"><b>INDUSTRIAL WASTE</b></h5>
              
              <button className="btn btn-success" onClick={details4}>VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

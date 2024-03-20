import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleNavigateToHero() {
    navigate("/Home");
  }
  function handleNavigateToHero1() {
    navigate("/Home1");
  }

  return (
    <div >
      <h1>
        <span>Team Ecobuddies</span>
      </h1>
      <dl className="dictionary" >
        <div className="term h-100" >
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              👨‍👩‍👧‍👦
            </span>
            <span >Buyer</span>
          </dt>
          <dd >
            "Tailored Solutions for Your Unique Needs!"
          </dd>
          <dd>
            <button className="btn btn-success" onClick={handleNavigateToHero}>VIEW as BUYER</button>
          </dd>
        </div>
        <div className="term h-100">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              👨‍💼
            </span>
            <span>Seller</span>
          </dt>
          <dd>
            "Empowering Sellers, Elevating Success!"
          </dd>
          <dd>
            <button className="btn btn-success" onClick={handleNavigateToHero1}>VIEW as SELLER</button>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Login;

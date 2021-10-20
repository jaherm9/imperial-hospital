import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  const { img, name, key, details, star } = props.service;

  return (
    
       <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={img} alt="Card  cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{details}</p>
        {props.showDetails && <button type="button" class="btn btn-warning">
          <Link to={"/service/" + key}> Service Details</Link>
        </button>}
        </div>
      </div> 
  );
};

export default Services;

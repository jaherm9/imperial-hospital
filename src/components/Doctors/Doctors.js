import React, { useState}from "react";
import "./Doctors.css";
import doctorData from "../../fakeData/doctor.json";

const Doctors = (props) => {
  const [doctors, setDoctors] = useState(doctorData)
  
  return (
    <div className="doctor">

      {
        doctors.map(doctor => {
          return (
            <div className="doctor"> 
              < img src={doctor.img} alt="" />
              <h3>{doctor.name}</h3>
              <h5>{doctor.specialist}</h5>
              <p>{ doctor.location}</p>
              <p>{ doctor.available}</p>
              
            </div>
          )
        })
      }
    </div>
    
  );
};

export default Doctors;

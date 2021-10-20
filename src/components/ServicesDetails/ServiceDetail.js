import React from "react";
import { useParams } from "react-router";
import Services from "../Services/Services";
import fakeData from "../../fakeData/data.json";

const ServiceDetail = () => {
  const { serviceKey } = useParams();
  const serviceDetail = fakeData.find(service => service.key === serviceKey)
  console.log(serviceDetail)
  
  return (
    <div>
      <h2> Service details</h2>
      <Services
        service={serviceDetail}
        showDetails={ false}
        
      />
    </div>
  );
};

export default ServiceDetail;

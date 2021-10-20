import React from "react";
import "./Appointment.css";
const Appointment = () => {
  return (
    <div className="container">
      <div className="row">
    <div className="w-50 appointment-container col-8">
      <h5 className="text-start">Book Appointment</h5>
      <form className="row g-3">
      <div className="col-md-6">
          <input type="name" className="form-control" id=" " placeholder="Your Name"/>
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" id="inputEmail4" placeholder="Your Email"/>
        </div>
        
        <div className="col-12">
          <input type="text" className="form-control" id="inputAddress" placeholder="Your Address here" />
        </div>
        
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option selected>Select City</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Barisal </option>
            <option>Khulna</option>
            <option>Mymensingh</option>
            <option>Rajshahi </option>
            <option>Rangpur </option>
            <option>Sylhet </option>
          </select>
        </div>
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option selected>Select State</option>
            <option>Mirpur</option>
            <option>Dhanmondi</option>
            <option>Gulshan </option>
            <option>Banani</option>
            <option>Badda</option>
            <option>Baridhara </option>
            <option>Kawran Bazar </option>
            <option>Agargaon </option>
          </select>
        </div>
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option selected>Are you new patients?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option selected>Specify your gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-md-6">
          <input type="name" className="form-control" id=" " placeholder="Zip"/>
        </div>
        <div className="col-md-6">
          <input type="name" className="form-control" id=" " placeholder="Birthday"/>
        </div>
        <div className="col-12">
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Write your note!</label>
          </div>
          <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
          Accept <span className="Terms">Terms of Services</span> and <span className="Terms">Privacy Policy</span>
          </label>
          </div>
          <div class="d-grid gap-2 mt-3">
          <button class="btn btn-primary" type="button">Submit Request</button>
        </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Appointment;

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


const Login = () => {
    const { googleSignIn,handleFormSubmit,handleEmailBlur,handlePasswordBlur,handleResetPassword,error } = useAuth()
    return (
        <div>
      
            <form onSubmit={handleFormSubmit}>
        <h2 className="text-primary"> Please Login</h2> 
        
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailBlur}
              type="email"
              className="form-control"
              placeholder="Write your email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordBlur}
              type="password"
              className="form-control"
              placeholder="Write your password"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
        
          </div>
          <div className="row">
            <p className="text-danger"> {error}</p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>{" "}
        <br />
        <button onClick={handleResetPassword} type="button" className="btn btn-success my-4">
          Reset Password
        </button>
      </form>
        <p>........Or .........</p>
        
            <button onClick={ googleSignIn} className="btn-primary mb-3">Sign in by google</button> <br/>
            <Link to ="/register"> Not registered?</Link>
        </div>
    );
};

export default Login;
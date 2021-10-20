import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="email" name=""  placeholder="Enter your email"/> <br/><br />
                <input type="password" name="" placeholder="Enter your password"/><br/><br />
                <input type="submit" value="Submit" />
            </form>

            <Link to ="login"> Already register?</Link>
        </div>
    );
};

export default Register;
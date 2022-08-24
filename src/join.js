import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Contact from './pages/contact';

function Join() {
    const navigate = useNavigate();

    const navigateContact = () =>{
        navigate('/contact');
    }
  return (
    <div className="form-container">
        <form action="" className="login-form">
            <label htmlFor="user-name" className="user-name">Username</label>
            <input type="text" name="username" id="username" className="input-username" />
            <br/>
            <label htmlFor="password" className="password">Password</label>
            <input type="password" name="password" id="password" className="input-password" />
            <br/>
            <input type="submit" className="submit-btn" value="Login"/>
        </form>

        <button onClick={navigateContact}>Register</button>

        <Routes>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default Join
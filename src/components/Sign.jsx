import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Axios from "axios"
import "../css/sign.css"

function Sign() {
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      email: emailReg,
      password: passwordReg,
      name: nameReg
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Header/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3 className="justify-content-center">Sign Up</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => {
                  setNameReg(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmailReg(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="batn btn-lg btn-primary"
              onClick={(register)}
            >Sign Up</button>
            <p className="forgot-password text-right">Already registered? <a href="/login">Sign In</a></p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Sign



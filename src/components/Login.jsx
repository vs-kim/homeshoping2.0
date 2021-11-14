import React, {useState, useEffect, setState} from 'react'
import Header from './Header'
import Axios from "axios"
import Footer from './Footer'
import "../css/sign.css"
import { Link } from 'react-router-dom'

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // const [loginStatus, setLoginStatus] = useState("");
  
  // Axios.defaults.withCredentials = true;

  // const login = () => {
  //   Axios.post('http://localhost:3001/login', {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message){
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].name);
  //     }
  //   });
  // };

  // useEffect(()=> {
  //   Axios.get('http://localhost:3001/login').then((response) => {
  //     console.log(response);
  //   })
  // }, []);


  return (
    <div>
      <Header/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3 className="justify-content-center">Login</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <Link to="/">
              <button
                type="submit"
                className="batn btn-lg btn-primary"
                // onClick={(login)}
              >Login</button>
            </Link>
            <p className="forgot-password text-left">Forgot <a href="#">password?</a></p>
          </form>
          {/* <h3>{loginStatus}</h3> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login

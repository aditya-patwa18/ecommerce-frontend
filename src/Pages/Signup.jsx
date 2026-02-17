import React, { useState } from 'react'
import './css/SignUp.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  const BASE_URL = "https://ecommerce-backend-xmia.onrender.com";

  const [state, setstate] = useState("sign up");
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responsedata;
    await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata),
    })
    .then((res) => res.json())
    .then((data) => responsedata = data);

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.error);
    }
  };

  const signup = async () => {
    let responsedata;
    await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata),
    })
    .then((res) => res.json())
    .then((data) => responsedata = data);

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.error);
    }
  };

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="signup-fields">

          {state === "sign up" &&
            <input
              name='username'
              value={formdata.username}
              onChange={changehandler}
              type="text"
              placeholder='Enter Your Name'
            />
          }

          <input
            name='email'
            value={formdata.email}
            onChange={changehandler}
            type="email"
            placeholder='Enter Your Email'
          />

          <input
            name='password'
            value={formdata.password}
            onChange={changehandler}
            type="password"
            placeholder='Enter Your Password'
          />
        </div>

        <button onClick={() => {
          state === "login" ? login() : signup()
        }}>Continue</button>

        {state === "sign up" ? (
          <div className="login-acc">
            Already Have An Account?{" "}
            <span onClick={() => {
              setstate("login");
              navigate("/login");
            }}>Login Here</span>
          </div>
        ) : (
          <div className="login-acc">
            Create An Account?{" "}
            <span onClick={() => {
              setstate("sign up");
              navigate("/signup");
            }}>Click Here</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default Signup;

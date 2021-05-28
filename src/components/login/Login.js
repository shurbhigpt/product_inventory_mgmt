import React from 'react';
import './login.css'
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { login } from "../reducers/productAction";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      name: name,
      email: email,
    };
    console.log(userData)
    dispatch(login(userData));
    history.push("/product")
    localStorage.setItem("user", JSON.stringify(userData))

    }
  return (
    <div className="login-div">
        <div className="logo-div">
          <h2>Login </h2>
        </div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button className="button" type="submit">
            Login
          </button>
        </form>
        </div>
      </div>
    )
}
export default Login;
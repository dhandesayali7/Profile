import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //getting email password
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
    }
  };





  return (
    <div className="class">
      <div>
        <h1 className="center">Login</h1>
        <hr />
        <form className="form">
          <div className="pass">
            <span></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label>Username</label>
          </div>
          <div className="pass">
            <span></span>
            <input type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="exampleInputPassword1" />
            <label>Password</label>
          </div>

          <button type="submit" onClick={handleSubmit}>Login</button>

          <div className="Link">
            <p>
              Don't Have An Account?{" "}
              <Link to="/" className="sign">
                Signup !
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

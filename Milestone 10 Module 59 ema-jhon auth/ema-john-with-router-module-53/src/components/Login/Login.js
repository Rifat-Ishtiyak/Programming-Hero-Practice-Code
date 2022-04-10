import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    signInWithEmailAndPassword(email,password);
    event.preventDefault();
  };

  if(user){
    navigate("/shop")
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="">Email : </label>
          <input onBlur={handleEmail} type="text" name="email" id="" />
          <br />
          <br />
          <label htmlFor="">Password : </label>
          <input
            onBlur={handlePassword}
            type="password"
            name="password"
            id=""
          />
          <br />
          {error.message}
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>
          New to ema-jhon? <Link to={"/signup"}>Create new account</Link>
        </p>
      </center>
    </div>
  );
};

export default Login;

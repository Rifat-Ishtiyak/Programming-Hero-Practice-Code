import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] =useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPass = (event)=>{
    setConfirmPassword(event.target.value);
  }

  const handleSignup = (event) => {
    if(password !== confirmPassword){
      setPassError("Password and Confirm Pass not matched");
    }
    createUserWithEmailAndPassword(email, password);
    event.preventDefault();
  };

  if (user) {
    navigate("/login");
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="">Email : </label>
          <input onBlur={handleEmail} type="text" name="email" />
          <br />
          <br />
          <label htmlFor="">Password : </label>
          <input
            onBlur={handlePassword}
            type="password"
            name="password"
          />
          <br />
          <br />
          <label htmlFor="">Confirm Password : </label>
          <input onBlur={handleConfirmPass} type="password" name="confirmPassword"/><br />
          {passError}
          <br />
          <br />
          {error.message}
          <input type="submit" value="Login" />
        </form>
        <p>
          Already have an Account? <Link to={"/login"}>Login</Link>
        </p>
      </center>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = { email, password };

    try {
        const response = await axios.post(
            "http://localhost:8000/auth/signin",
            requestData, 
            {
                withCredentials: true, 
            }
        );

      if (response.data.success) {
        console.log(response.data.data)
        navigate('/chat')
      } else {
        console.error("Sign-Up Failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error during Sign-Up", error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Implement Google Sign-In logic here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Sign Up
        </button>
        <div className="divider">OR</div>
        <button type="button" className="btn-google" onClick={handleGoogleSignIn}>
          <img
            src="../../images/auth/google.jpg"
            alt="Google Logo"
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;

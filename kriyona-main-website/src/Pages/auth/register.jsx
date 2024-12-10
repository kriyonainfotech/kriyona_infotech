import React from 'react';
import './register.css';

const SignUp = () => {
  const handleGoogleSignIn = () => {
    // Logic for Google Sign-In
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Sign Up</h1>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="btn-primary">Sign Up</button>
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

export default SignUp;

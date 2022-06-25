import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [formError, setFormError] = useState(false);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserRegistration = (e) => {
    e.preventDefault();
    if (
      user.name.trim().length === 0 ||
      user.email.trim().length === 0 ||
      user.password.trim().length === 0
    ) {
      setFormError(true);
      return;
    }
    setFormError(false);
    axios
      .post("http://localhost:3001/api/users", user, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success) {
          setUser({ name: "", email: "", password: "" });
          navigate("/sign-in");
        }
      })
      .catch((error) => {
        setFormError(true);
      });
  };

  return (
    <div className="sign-up auth-container">
      <form
        className="auth-form sign-up-form spaced-form"
        onSubmit={handleUserRegistration}
      >
        <h1 className="text-center page-title">Sign Up</h1>
        <div className="input-group">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="input-control"
            value={user.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="input-control"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Enter your password</label>
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            className="input-control"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <button type="submit" className="btn btn-primary">
           Ready for signing!
          </button>
        </div>
      </form>
      {formError ? (
        <div className="alert alert-danger">
          <p className="alert-message">
            Invalid user details. Please verify once and resubmit.
          </p>
        </div>
      ) : null}
    </div>
  );
};

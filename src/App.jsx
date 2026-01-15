import { useState } from "react";
import "./App.css";

function App() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    let successMsg = "";

    if (!formInput.email) {
      errors.email = "Email is required";
    }

    if (!formInput.password) {
      errors.password = "Password is required";
    } else if (formInput.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formInput.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formInput.password !== formInput.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      successMsg = "Form submitted successfully!";
    }

    setFormError({
      ...errors,
      successMsg,
    });

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Validation Form</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <p className="label">Email</p>
            <input
              value={formInput.email}
              onChange={handleChange}
              name="email"
              type="text"
              className="input"
              placeholder="Enter Email"
            />
            <p className="error-message">{formError.email}</p>

            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="input"
              placeholder="Enter Password"
            />
            <p className="error-message">{formError.password}</p>

            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>

            <p className="success-message">{formError.successMsg}</p>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

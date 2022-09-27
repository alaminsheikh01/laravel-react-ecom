import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let item = { email, password };

    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log(result);
    navigate("/add");
  };

  return (
    <div className="col-sm-4 offset-sm-4">
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          placeholder="Password"
        />

        <button className="btn btn-primary mt-5" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    let item = { name, email, password };
    // console.log(item);

    let result = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  };

  return (
    <div className="col-sm-4 offset-sm-4">
      <h2>SignUp page</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />

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

export default SignUp;

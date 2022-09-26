import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  return (
    <div>
      <h2>Login page</h2>
    </div>
  );
}

export default Login;

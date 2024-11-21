// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassword";
import Product from "./Product";

const Home = () => (
  <div style={styles.home}>
    <h1>Welcome to the App</h1>
    <div style={styles.buttonGroup}>
      <Link to="/login" style={styles.button}>
        Đăng nhập
      </Link>
      <Link to="/signup" style={{ ...styles.button, marginLeft: "10px" }}>
        Đăng ký
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} /> 
        <Route path="/product" element={<Product />} /> 
      </Routes>
    </Router>
  );
};

const styles = {
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  buttonGroup: {
    display: "flex",
    marginTop: "20px",
  },
  button: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    textAlign: "center",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default App;

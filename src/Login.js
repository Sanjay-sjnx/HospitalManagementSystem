import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && email === user.email && password === user.password) {
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}> 
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Login</h1>
        {error && <p style={styles.error}>{error}</p>}
        <input,
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
        <p style={styles.link}>
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url('https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg')", // Replace with your image URL or local path
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1em",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "#ff4d4d",
    marginBottom: "10px",
  },
  link: {
    marginTop: "20px",
  },
};

export default Login;

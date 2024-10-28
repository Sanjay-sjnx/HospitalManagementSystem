import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name && email && password) {
      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      navigate("/login");
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Sign Up</h1>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
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
        <button onClick={handleSignUp} style={styles.button}>
          Sign Up
        </button>
        <p style={styles.link}>
          Already have an account? <a href="/login">Login</a>
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
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/009/447/867/non_2x/abstract-health-medical-doctor-healthcare-hud-interface-and-digital-technology-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-vector.jpg')", // Replace with your image URL or local path
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

export default SignUp;

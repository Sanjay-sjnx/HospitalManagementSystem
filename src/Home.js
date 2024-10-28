import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hospital Management System</h1>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => handleButtonClick("/appointments")}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Manage Appointments
        </button>
        <button
          onClick={() => handleButtonClick("/patients")}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Manage Patients
        </button>
        <button
          onClick={() => handleButtonClick("/doctors")}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Manage Doctors
        </button>
        <button
          onClick={() => handleButtonClick("/billing")}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Billing
        </button>
      </div>
      <div style={styles.infoSection}>
        <h2 style={styles.infoTitle}>Welcome to the Hospital Management System</h2>
        <p style={styles.infoText}>
          Welcome to AS HOSPITALS! Our cutting-edge Hospital Management System (HMS) is designed to optimize healthcare services by offering seamless integration of hospital operations. This system aims to provide a user-friendly, efficient platform for managing patient care, medical staff, and hospital administration.
        </p>
        <p style={styles.infoText}>
          <strong>Key Features You Can Access:</strong>
        </p>
        <ul style={styles.list}>
          <li>Appointments: Effortlessly schedule, manage, and track doctor appointments.</li>
          <li>Patients: Securely store and manage patient records, including medical histories and treatments.</li>
          <li>Doctors: View and update patient data, schedule appointments, and collaborate with other healthcare professionals.</li>
          <li>Billing: Automated billing and invoicing for services provided to patients.</li>
        </ul>
        <p style={styles.infoText}>
          Our platform ensures smooth communication and collaboration between healthcare providers and patients, all in a secure and efficient manner. Whether you're a patient looking to book an appointment, or hospital staff managing day-to-day tasks, AS-HMS offers a seamless experience for everyone.
        </p>
        <p style={styles.infoText}><strong>Start navigating through the system for a better, streamlined hospital experience!  - AS HOSPITALS (SANJAY) </strong></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundImage: "url('https://wallpaper.dog/large/854284.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    fontSize: "3em",
    marginBottom: "30px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1.1em",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#007ba7",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: { 
    backgroundColor: "#0056b3",
  },
  infoSection: {
    backgroundColor: "#ffffffd9",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  infoTitle: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333",
  },
  infoText: {
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  list: {
    textAlign: "left",
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "20px",
  },
};

export default Home;

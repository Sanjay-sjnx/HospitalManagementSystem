import React, { useState } from "react";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", contact: "" });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, form]);
    setForm({ name: "", age: "", contact: "" });
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Patients</h2>
      <div style={styles.formContainer}>
        <h3>New Patient</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Add Patient
          </button>
        </form>
        <input
          type="text"
          placeholder="Search by Patient Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.listContainer}>
        <h3>Patient List</h3>
        <ul style={styles.list}>
          {filteredPatients.map((patient, index) => (
            <li key={index} style={styles.listItem}>
              {patient.name} - Age: {patient.age} - Contact: {patient.contact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/712/977/non_2x/abstract-health-medical-science-healthcare-icon-digital-technology-doctor-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listContainer: {
    marginTop: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default Patients;

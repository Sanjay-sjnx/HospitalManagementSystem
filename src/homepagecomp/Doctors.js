import React, { useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ name: "", specialty: "", contact: "" });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoctors([...doctors, form]);
    setForm({ name: "", specialty: "", contact: "" });
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Doctors</h2>
      <div style={styles.formContainer}>
        <h3>New Doctor</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={form.specialty}
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
            Add Doctor
          </button>
        </form>
        <input
          type="text"
          placeholder="Search by Doctor Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.listContainer}>
        <h3>Doctor List</h3>
        <ul style={styles.list}>
          {filteredDoctors.map((doctor, index) => (
            <li key={index} style={styles.listItem}>
              {doctor.name} - Specialty: {doctor.specialty} - Contact: {doctor.contact}
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
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/008/551/679/non_2x/abstract-doctor-digital-and-hologram-interface-concept-medical-data-analysis-in-visual-form-modern-future-medicine-that-uses-artificial-intelligence-in-processing-and-treatment-of-future-vector.jpg')",
    backgroundSize: "contain",
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

export default Doctors;

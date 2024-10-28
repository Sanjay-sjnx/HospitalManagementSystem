import React, { useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ patientName: "", date: "", time: "" });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, form]);
    setForm({ patientName: "", date: "", time: "" });
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Appointments</h2>
      <div style={styles.formContainer}>
        <h3>New Appointment</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Add Appointment
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
        <h3>Upcoming Appointments</h3>
        <ul style={styles.list}>
          {filteredAppointments.map((appointment, index) => (
            <li key={index} style={styles.listItem}>
              {appointment.patientName} - {appointment.date} at {appointment.time}
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
    backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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

export default Appointments;

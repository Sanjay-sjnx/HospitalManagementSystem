import React, { useState } from "react";

const Billing = () => {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({ patientName: "", amount: "", date: "" });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBills([...bills, form]);
    setForm({ patientName: "", amount: "", date: "" });
  };

  const filteredBills = bills.filter((bill) =>
    bill.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Billing Management</h2>
      <div style={styles.formContainer}>
        <h3>New Bill</h3>
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
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
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
          <button type="submit" style={styles.button}>
            Add Bill
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
        <h3>Billing Records</h3>
        <ul style={styles.list}>
          {filteredBills.map((bill, index) => (
            <li key={index} style={styles.listItem}>
              {bill.patientName} - Amount: {bill.amount} - Date: {bill.date}
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
    backgroundImage: "url('https://www.arizonacollege.edu/wp-content/uploads/2016/09/Medical-Technology-Blog.jpg')",
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

export default Billing;

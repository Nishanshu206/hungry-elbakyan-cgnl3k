import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const UsersSection = () => {
  const [users, setUsers] = useState([
    { name: "Rahul Sinha", email: "rahul.sinha@mazars.co.in", phone: "1234567890", role: "Admin", designation: "Tech Lead", location: "Delhi", floor: "1st", active: true },
    { name: "Faizan Ahmed", email: "faizan.ahmed@mazars.co.in", phone: "9876543210", role: "User", designation: "IT Engineer", location: "Mumbai", floor: "2nd", active: false },
    { name: "Aditi Sharma", email: "aditi.sharma@mazars.co.in", phone: "4567891230", role: "Manager", designation: "Operations", location: "Bangalore", floor: "3rd", active: true },
    { name: "Sanjay Gupta", email: "sanjay.gupta@mazars.co.in", phone: "6543219870", role: "HR", designation: "HR Manager", location: "Chennai", floor: "4th", active: false },
    { name: "Ritika Desai", email: "ritika.desai@mazars.co.in", phone: "7654321980", role: "User", designation: "Software Developer", location: "Hyderabad", floor: "5th", active: true },
  ]);

  const [filterActive, setFilterActive] = useState(false);

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  };

  const filteredUsers = filterActive ? users.filter((user) => user.active) : users;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Users</h2>
        <div style={styles.profile}>
          <span style={styles.profileIcon}>👤</span>
          <span style={styles.profileText}>Hello, User</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Users</h3>
          <p style={styles.cardValue}>{users.length}</p>
          <div style={styles.cardWave}></div>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Active Users</h3>
          <p style={styles.cardValue}>{users.filter((user) => user.active).length}</p>
          <div style={styles.cardWave}></div>
        </div>
        <div style={styles.actions}>
          <button style={styles.button}>+ Add User</button>
          <button style={styles.button}>Bulk Add</button>
        </div>
      </div>

      {/* Filter Section */}
      <div style={styles.filter}>
        <FaFilter style={styles.filterIcon} onClick={toggleFilter} />
        <span style={styles.filterText}>
          {filterActive ? "Showing Active Users Only" : "Showing All Users"}
        </span>
      </div>

      {/* Users Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}></th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Phone</th>
            <th style={styles.tableHeader}>Role</th>
            <th style={styles.tableHeader}>Designation</th>
            <th style={styles.tableHeader}>Location</th>
            <th style={styles.tableHeader}>Floor</th>
            <th style={styles.tableHeader}>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>
                <input
                  type="checkbox"
                  checked={user.active}
                  onChange={() => {
                    const updatedUsers = [...users];
                    updatedUsers[index].active = !updatedUsers[index].active;
                    setUsers(updatedUsers);
                  }}
                />
              </td>
              <td style={styles.tableCell}>{user.name}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={styles.tableCell}>{user.phone}</td>
              <td style={styles.tableCell}>{user.role}</td>
              <td style={styles.tableCell}>{user.designation}</td>
              <td style={styles.tableCell}>{user.location}</td>
              <td style={styles.tableCell}>{user.floor}</td>
              <td style={styles.tableCell}>
                <input
                  type="checkbox"
                  checked={user.active}
                  onChange={() => {
                    const updatedUsers = [...users];
                    updatedUsers[index].active = !updatedUsers[index].active;
                    setUsers(updatedUsers);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: "18px",
    marginRight: "8px",
  },
  profileText: {
    fontSize: "16px",
    color: "#555",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  card: {
    flex: 1,
    padding: "20px",
    margin: "0 10px",
    backgroundColor: "#e6f7ff",
    borderRadius: "8px",
    position: "relative",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  cardValue: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0078D7",
  },
  cardWave: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "10px",
    backgroundColor: "#0078D7",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    padding: "10px 15px",
    margin: "5px 0",
    backgroundColor: "#0078D7",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  filter: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  filterIcon: {
    fontSize: "16px",
    color: "#0078D7",
    marginRight: "8px",
    cursor: "pointer",
  },
  filterText: {
    fontSize: "14px",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "8px",
    overflow: "hidden",
  },
  tableHeader: {
    padding: "12px",
    backgroundColor: "#e6f7ff",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
    borderBottom: "1px solid #ddd",
  },
  tableRow: {
    transition: "background-color 0.2s",
  },
  tableCell: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    color: "#555",
  },
};

export default UsersSection;

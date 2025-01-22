import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const UsersSection = () => {
  const [selectedNav, setSelectedNav] = useState("Users"); // Track the selected navigation item
  const [users, setUsers] = useState([
    {
      name: "Rahul Sinha",
      email: "rahul.sinha@mazars.co.in",
      phone: "1234567890",
      role: "Admin",
      designation: "Tech Lead",
      location: "Delhi",
      floor: "1st",
      active: true,
    },
    {
      name: "Faizan Ahmed",
      email: "faizan.ahmed@mazars.co.in",
      phone: "9876543210",
      role: "User",
      designation: "IT Engineer",
      location: "Mumbai",
      floor: "2nd",
      active: false,
    },
    {
      name: "Aditi Sharma",
      email: "aditi.sharma@mazars.co.in",
      phone: "4567891230",
      role: "Manager",
      designation: "Operations",
      location: "Bangalore",
      floor: "3rd",
      active: true,
    },
    {
      name: "Sanjay Gupta",
      email: "sanjay.gupta@mazars.co.in",
      phone: "6543219870",
      role: "HR",
      designation: "HR Manager",
      location: "Chennai",
      floor: "4th",
      active: false,
    },
    {
      name: "Ritika Desai",
      email: "ritika.desai@mazars.co.in",
      phone: "7654321980",
      role: "User",
      designation: "Software Developer",
      location: "Hyderabad",
      floor: "5th",
      active: true,
    },
  ]);

  const [filterActive, setFilterActive] = useState(false);

  // Function to toggle filter
  const toggleFilter = () => {
    setFilterActive(!filterActive);
  };

  // Filtered users based on active status
  const filteredUsers = filterActive
    ? users.filter((user) => user.active)
    : users;

  return (
    <div style={styles.container}>
      {/* Selected Navigation Heading */}
      <h1 style={styles.heading}>{selectedNav}</h1>

      {/* Profile Section */}
      <div style={styles.profileContainer}>
        <div style={styles.profileIcon}>🌸</div>
        <div style={styles.profileText}>Hi User</div>
      </div>

      {/* Users Summary and Actions */}
      <div style={styles.summary}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Users</h3>
          <p style={styles.cardValue}>{users.length}</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Active Users</h3>
          <p style={styles.cardValue}>
            {users.filter((user) => user.active).length}
          </p>
        </div>
        <div style={styles.actions}>
          <button style={styles.button}>+ Add User</button>
          <button style={styles.button}>Bulk Add</button>
        </div>
      </div>

      {/* Filter Icon */}
      <div style={styles.filterContainer}>
        <FaFilter
          style={styles.filterIcon}
          onClick={toggleFilter}
          title="Filter Active Users"
        />
        <span style={styles.filterLabel}>
          {filterActive ? "Showing Active Users Only" : "Showing All Users"}
        </span>
      </div>

      {/* Users List Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}></th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Designation</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Floor</th>
            <th style={styles.th}>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td style={styles.td}>
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
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.phone}</td>
              <td style={styles.td}>{user.role}</td>
              <td style={styles.td}>{user.designation}</td>
              <td style={styles.td}>{user.location}</td>
              <td style={styles.td}>{user.floor}</td>
              <td style={styles.td}>
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
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px", // Space below heading
    textAlign: "left", // Left align the heading
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Aligns to the right
    marginBottom: "15px", // Space below profile section
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#f4f4f4", // Placeholder for profile image
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#888",
    marginRight: "10px", // Space between icon and text
  },
  profileText: {
    fontSize: "16px",
    color: "#555",
    fontWeight: "bold",
  },
  summary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    flexWrap: "nowrap", // Ensures everything stays in one row
  },
  card: {
    flex: "1",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    margin: "0 10px",
    textAlign: "center",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "16px",
    color: "#888",
    margin: "0 0 5px 0",
    textAlign: "left",
  },
  cardValue: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
    textAlign: "left",
  },
  actions: {
    display: "flex",
    flexDirection: "column", // Stack buttons vertically
    alignItems: "flex-start", // Align buttons to the left
  },
  button: {
    marginBottom: "10px", // Space between buttons
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Align filter to the right
    marginBottom: "10px",
  },
  filterIcon: {
    fontSize: "18px",
    color: "#007bff",
    cursor: "pointer",
    marginRight: "8px",
  },
  filterLabel: {
    fontSize: "14px",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
};

export default UsersSection;

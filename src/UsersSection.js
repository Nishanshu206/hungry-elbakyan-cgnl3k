import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const UsersSection = () => {
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
  const [activeButton, setActiveButton] = useState(false); // State to track button click

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  };

  const handleButtonClick = () => {
    setActiveButton(true); // Change the state to active on click
    setTimeout(() => setActiveButton(false), 200); // Reset after 200ms
  };

  const filteredUsers = filterActive
    ? users.filter((user) => user.active)
    : users;

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h2 style={styles.title}>Users</h2>
        <div style={styles.profile}>
          <img
            src="/path-to-profile-image.jpg" // Replace with actual profile image path
            alt="Profile"
            style={styles.profileImage}
          />
          <span style={styles.profileText}>Hello, User</span>
        </div>
      </div>

      {/* Cards Section */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Total Users</h3>
          <p style={styles.cardValue}>{users.length}</p>
          <img
            src="/a.png" // Replace with your image path
            alt="Wave Design"
            style={styles.cardImage}
          />
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Active Users</h3>
          <p style={styles.cardValue}>
            {users.filter((user) => user.active).length}
          </p>
          <p style={styles.cardChange}>
            <span style={styles.cardChangeArrow}>▲</span> 20%
          </p>
          <img src="/b.png" alt="Wave Design" style={styles.cardImage} />
        </div>

        {/* Actions Section */}
        <div style={styles.actions}>
          <button
            style={{
              ...styles.button,
              backgroundColor: activeButton ? "#006400" : "#ffffff", // Dark green on click
              color: activeButton ? "#ffffff" : "#3a3b3d", // Text color adjustment
            }}
            onClick={handleButtonClick}
          >
            + Add User
          </button>
          <button
            style={{
              ...styles.button,
              backgroundColor: activeButton ? "#006400" : "#ffffff",
              color: activeButton ? "#ffffff" : "#3a3b3d",
            }}
            onClick={handleButtonClick}
          >
            Bulk Add
          </button>
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
              <td style={styles.tableCell}>{user.active ? "Yes" : "No"}</td>
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
    backgroundColor: "#e1edf7",
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
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  profileText: {
    fontSize: "16px",
    color: "#555",
  },
  card: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    position: "relative",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#0078D7",
  },
  cardChange: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    fontSize: "14px",
    color: "green",
    margin: 0,
  },
  cardImage: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "50px",
    height: "50px",
  },
  cards: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  cardChangeArrow: {
    color: "green",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    width: "140px",
    height: "40px",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    color: "#3a3b3d",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease, color 0.2s ease",
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
  tableCell: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    color: "#555",
  },
};

export default UsersSection;

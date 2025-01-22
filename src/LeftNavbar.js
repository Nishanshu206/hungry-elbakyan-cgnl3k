import React from "react";
import {
  FaHome,
  FaUsers,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaTable,
  FaChair,
  FaBuilding,
  FaCar,
  FaCog,
} from "react-icons/fa";

const LeftNavbar = () => {
  return (
    <div style={styles.navContainer}>
      {/* Updated Logo */}
      <div style={styles.logo}>
        <div style={styles.fmText}>fm</div>
        <div style={styles.subText}>
          <div style={styles.bookMy}>Book My</div>
          <div style={styles.desk}>Desk</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <FaHome style={styles.icon} /> Home
        </li>
        <li style={styles.navItem}>
          <FaUsers style={styles.icon} /> Users
        </li>
        <li style={styles.navItem}>
          <FaMapMarkerAlt style={styles.icon} /> Locations
        </li>
        <li style={styles.navItem}>
          <FaLayerGroup style={styles.icon} /> Floors
        </li>
        <li style={styles.navItem}>
          <FaTable style={styles.icon} /> Rows
        </li>
        <li style={styles.navItem}>
          <FaChair style={styles.icon} /> Desks
        </li>
        <li style={styles.navItem}>
          <FaBuilding style={styles.icon} /> Rooms
        </li>
        <li style={styles.navItem}>
          <FaCar style={styles.icon} />
          Parking
        </li>
        <li style={styles.navItem}>
          <FaCar style={styles.icon} /> Vehicle
        </li>
        <li style={styles.navItem}>
          <FaCog style={styles.icon} /> Settings
        </li>
      </ul>
    </div>
  );
};

const styles = {
  navContainer: {
    width: "240px",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  logo: {
    display: "flex", // Align FM and sub-text horizontally
    alignItems: "center",
    marginBottom: "30px",
  },
  fmText: {
    fontSize: "80px", // Large size for "FM"
    fontWeight: "bold",
    lineHeight: "1",
    color: "#2b2b2b",
    margin: "0 10px 0 0", // Add spacing between FM and sub-text
  },
  subText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Align "Book My" at the top and "Desk" at the bottom
    height: "80px", // Matches the height of FM text
  },
  bookMy: {
    fontSize: "10px", // Smaller size for "Book My"
    lineHeight: "8",
    color: "#000080",
    textTransform: "uppercase",
  },
  desk: {
    fontSize: "10px", // Smaller size for "Desk"
    fontWeight: "bold",
    lineHeight: "1", // Matches the line height of "Book My" for consistent spacing
    color: "#000080",
    margin: "0", // No margin to remove extra space
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    cursor: "pointer",
  },
  icon: {
    marginRight: "10px",
  },
};

export default LeftNavbar;

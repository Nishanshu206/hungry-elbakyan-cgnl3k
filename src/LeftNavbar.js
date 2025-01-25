import React from "react";
import { FaHome, FaUsers, FaMapMarkerAlt, FaLayerGroup, FaTable, FaChair, FaBuilding, FaCar, FaCog } from "react-icons/fa";

const LeftNavbar = () => {
  return (
    <div style={styles.navContainer}>
      {/* Logo Section */}
      <div style={styles.logo}>
        <span style={styles.fmText}>fm</span>
        <div style={styles.subText}>
          <span style={styles.bookMy}>Book My</span>
          <span style={styles.desk}>Desk</span>
        </div>
      </div>

      {/* Navigation Items */}
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <FaHome style={styles.icon} />
          <span>Home</span>
        </li>
        <li style={styles.navItem}>
          <FaUsers style={styles.icon} />
          <span>Users</span>
        </li>
        <li style={styles.navItem}>
          <FaMapMarkerAlt style={styles.icon} />
          <span>Locations</span>
        </li>
        <li style={styles.navItem}>
          <FaLayerGroup style={styles.icon} />
          <span>Floors</span>
        </li>
        <li style={styles.navItem}>
          <FaTable style={styles.icon} />
          <span>Rows</span>
        </li>
        <li style={styles.navItem}>
          <FaChair style={styles.icon} />
          <span>Desks</span>
        </li>
        <li style={styles.navItem}>
          <FaBuilding style={styles.icon} />
          <span>Rooms</span>
        </li>
        <li style={styles.navItem}>
          <FaCar style={styles.icon} />
          <span>Parking</span>
        </li>
        <li style={styles.navItem}>
          <FaCar style={styles.icon} />
          <span>Vehicle</span>
        </li>

        {/* Settings */}
        <li style={styles.navItemBottom}>
          <FaCog style={styles.icon} />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  navContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    fontFamily: "'Arial', sans-serif",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  fmText: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#0078D7",
    marginRight: "10px",
  },
  subText: {
    display: "flex",
    flexDirection: "column",
  },
  bookMy: {
    fontSize: "12px",
    color: "#5798d9",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: "1.2",
  },
  desk: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#191970",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
    transition: "background 0.3s ease",
  },
  navItemBottom: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
    transition: "background 0.3s ease",
  },
  icon: {
    marginRight: "15px",
    fontSize: "20px",
    color: "#3a3b3d",
  },
};

export default LeftNavbar;
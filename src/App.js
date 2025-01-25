// import "./styles.css";
// import React from "react";
// import LeftNavbar from "./LeftNavbar";

// const App = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <LeftNavbar />
//       <div style={{ flex: 1, padding: "20px" }}>
//         {/* Main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import LeftNavbar from "./LeftNavbar";
import UsersSection from "./UsersSection";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftNavbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <UsersSection />
      </div>
    </div>
  );
};

export default App;

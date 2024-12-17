import React, { useState } from "react";
import Navbar from "./components/navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";

function App() {
  const [activePage, setActivePage] = useState("home"); // Manage active tab state

  return (
    <div>
      <Navbar title="TextUtils" onTabChange={setActivePage} /> {/* Pass setActivePage as a prop */}
      <div className="container my-3">
        {activePage === "home" && (
          <TextForm heading="Enter the text you want formatted." />
        )}
        {activePage === "about" && <About />}
      </div>
    </div>
  );
}

export default App;

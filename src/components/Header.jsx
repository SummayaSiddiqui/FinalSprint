import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div className="header-container">
        <header>
          <img
            src={`${process.env.PUBLIC_URL}/Header1.png`}
            alt="Header"
          />
        </header>
        <NavBar />
      </div>
    </>
  );
}

export default Header;

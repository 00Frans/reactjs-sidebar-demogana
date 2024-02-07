import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SideBarData } from "../../data/Sidebar.data";

import "./Sidebar.css";
import logoIcon from "../../images/ddd.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ width: isOpen ? "200px" : "50px" }} className="Sidebar">
      <div className="top_section bg-primary">
        <a
          style={{ display: isOpen ? "block" : "none" }}
          className="navbar-brand "
          href="#"
        >
          <img className="App-logo logo" src={logoIcon} alt="logo..." />
        </a>
        <div
          style={{ marginLeft: isOpen ? "80px" : "0px" }}
          className="d-flex justify-content-end"
        >
          <FaBars onClick={toggle} />
        </div>
      </div>
      <ul className="SidebarList">
        {SideBarData.map((val, key) => (
          <li
            key={key}
            className="row"
            id={window.location.pathname == val.link ? "active" : ""}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div id="icon">{val.icon}</div>
            <div id="title" style={{ display: isOpen ? "block" : "none" }}>
              {val.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

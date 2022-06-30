import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/mod-1/logo-icon.png";
import Intro from "../Intro/Intro";
import "./header.scss";
import { useTranslation } from "react-i18next";


const Header: React.FC = () => {

  const navLinkClass = ({ isActive }: any) => {
    return isActive ? "header_nav-link activated" : "header_nav-link";
  };


  return (
    <section className="section header bg-mod-1">
      <div className="container">
        <div className="header_container">
          <div className="header_logo">
            <img src={logo} alt="logo" />
          </div>
          <NavLink className={navLinkClass} to="/">
            About The Project
          </NavLink>
          {/* <div className="header_nav">
          </div> */}
        </div>
      </div>
      <Intro />
    </section>
  );
};

export default Header;

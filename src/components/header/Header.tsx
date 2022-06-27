import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/mod-1/logo-icon.png";
import Intro from "../Intro/Intro";
import "./header.scss";

const headerNavLink = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/works" },
  { title: "Contact", link: "/contact" },
];

const headerNavLinkInfo = [
  { title: "Work with us." },
  { title: "Recruiting." },
];

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState(false);

  const navLinkClass = ({ isActive }: any) => {
    return isActive ? "header_nav-link activated" : "header_nav-link";
  };

  const navLinkInfoClass = ({ isActive }: any) => {
    return isActive
      ? "header_nav_info_link actived-link"
      : "header_nav_info_link";
  };
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleLanguageKR = () => {
    setLanguage(true);
  };
  const handleLanguageEN = () => {
    setLanguage(false);
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
          <div className="header_nav_container">
            <span
              onClick={handleMenu}
              className={`${
                menu
                  ? "header_nav_container_icon active-menu"
                  : "header_nav_container_icon"
              }`}
            ></span>
            <div className="header_nav_container_language">
              <span
                onClick={handleLanguageKR}
                className={`${language ? "activated" : ""}`}
              >
                KR
              </span>
              <span
                onClick={handleLanguageEN}
                className={`${language ? "" : "activated"}`}
              >
                EN
              </span>
            </div>
          </div>
          <div
            className={`${menu ? "header_menu active-menu" : "header_menu"}`}
          >
            <div className="header_menu_page">
              {headerNavLink.map((item, index) => (
                <NavLink
                  key={index}
                  className={navLinkInfoClass}
                  to={item.link}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div className="header_menu_line">-</div>
            <div className="header_menu_info">
              <span>
                {language
                  ? "서울특별시 강남구 도산대로 8길 17-10 이리스빌딩 1F"
                  : "17-10, Dosan-daero 8-gil, Gangnam-gu, Republic of Korea 1F"}
                <br /> Tel 02.543.4983 / Fax 02.6280.4079
              </span>
              <NavLink
                className={navLinkInfoClass}
                to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
              >
                View Map
              </NavLink>
              <div className="header_menu_info_container">
                {headerNavLinkInfo.map((item, index) => (
                  <>
                    <span key={index}>{item.title}</span>
                    <a href="mailto:looc.tzlee@gmail.com">
                      looc.tzlee@gmail.com
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="header_nav">
          </div> */}
        </div>
      </div>
      <Intro />
    </section>
  );
};

export default Header;

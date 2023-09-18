import styled from "styled-components";
import { navItems } from "./constant";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MobileNav({ onClose, showMobileMenu }) {
  const [subMenu, setSubmenu] = useState("");

  const handleNavItemClick = (title) => {
    if (subMenu === title) {
      setSubmenu("");
    } else {
      setSubmenu(title);
    }
  };

  return (
    <StyledNav className={`${showMobileMenu ? "open" : "close"}`}>
      <div>
        <div className="container">
          <Link to={"/"}>
            <img
              className="logo"
              alt="unico-connect-logo"
              src={
                "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg"
              }
            />
          </Link>
          <div className="ham-nav">
            <button className="close-btn" onClick={onClose} />
          </div>
        </div>
      </div>
      {Array.isArray(navItems) && navItems.length ? (
        <ul className="list-container">
          {navItems.map((item) => (
            <li className="nav-item" key={item.title}>
              {item.url ? (
                <Link to={item.url} className="nav-title">
                  {item.title}
                </Link>
              ) : (
                <span
                  className="nav-title with-submenu"
                  onClick={() => handleNavItemClick(item.title)}
                >
                  {item.title}
                </span>
              )}
              {item.title === subMenu &&
              Array.isArray(item.options) &&
              item.options.length ? (
                <ul className="sub-menu">
                  {item.options.map((eachOption) => (
                    <Link
                      to={eachOption.url}
                      className="sub-menu-item"
                      key={eachOption.heading}
                    >
                      {eachOption.heading}
                    </Link>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </StyledNav>
  );
}

const StyledNav = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  left: 0;
  z-index: 999;
  background-color: #ffffff;
  transition: top 0.3s ease-in-out;
  &.close {
    top: -100vh;
  }

  &.open {
    top: 0;
  }

  .list-container {
    padding: 15px;
  }

  .nav-item {
    padding: 20px;
  }

  .sub-menu {
    margin-left: 20px;

    .sub-menu-item {
      padding: 10px;
      display: block;
      text-decoration: none;
      color: #000;
    }
  }

  .nav-title {
    color: #000;
    text-decoration: none;
  }

  .with-submenu {
    display: flex;
    justify-content: space-between;
    &::after {
      content: "∇";
    }
  }
`;

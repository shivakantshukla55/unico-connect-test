import { navItems } from "./constant";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledNavbar>
      <div className="container">
        <div>
          <Link to={"/"}>
            <img
              className="logo"
              alt="unico-connect-logo"
              src={
                "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg"
              }
            />
          </Link>
        </div>
        {Array.isArray(navItems) && navItems.length ? (
          <ul className="links-container">
            {navItems.map((item) => (
              <NavItem key={item.title} {...item} />
            ))}
            <li className="get-in-touch">
              <Link to={"contact"}>Get in Touch</Link>
            </li>
          </ul>
        ) : null}
        <div className="hamburger-nav ham-nav">
          <button onClick={() => setShowMobileMenu(true)} />
        </div>

        <MobileNav
          showMobileMenu={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100vw;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;

  .logo {
    width: 160px;
    height: 50px;
    display: block;
  }

  .container {
    width: 95%;
    max-width: 1100px;
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links-container {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .ham-nav {
    button {
      background: none;
      border: none;
      padding: 18px;
      cursor: pointer;
      font-size: 24px;

      &::before {
        content: "☰";
      }
    }
  }

  .hamburger-nav {
    display: none;

    @media only screen and (max-width: 768px) {
      display: block;
    }
  }

  .get-in-touch {
    list-style: none;

    a {
      color: #fff;
      cursor: pointer;
      border: 0;
      border-radius: 0;
      background-color: #101010;
      margin-left: 10px;
      font-family: "Inter", sans-serif;
      padding: 15px 25px;
      display: block;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #3898ec;
      }
    }
  }
`;

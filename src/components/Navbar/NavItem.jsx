import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function NavItem(props) {
  const { title, options, url } = props;
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowOptions(true);
  };

  const handleMouseLeave = (e) => {
    setShowOptions(false);
  };

  return (
    <StyledNavitem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {url ? (
        <Link className="link" to={url}>
          {title}
        </Link>
      ) : (
        <span className="link">{title}</span>
      )}
      {showOptions && Array.isArray(options) && options.length ? (
        <ul
          className="options-container"
          style={{ width: title === "Hire Developers" ? "900px" : "300px" }}
        >
          {options.map((item) => (
            <li key={item.heading} className="list-drop">
              <Link to={item.url}>
                <h4 className="link-head">{item.heading}</h4>
                <span className="link-icon">
                  <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </StyledNavitem>
  );
}

const StyledNavitem = styled.li`
  position: relative;
  list-style: none;

  .link {
    padding: 20px;
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #222222;
    cursor: pointer;
    text-decoration: none;
  }

  .options-container {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-wrap: wrap;
  }

  .list-drop {
    list-style: none;
    cursor: pointer;
    position: relative;

    a {
      width: 250px;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      text-decoration: none;
      transition: opacity 0.3s;
      display: flex;
      font-weight: 500;
      align-items: center;
    }

    .link-head {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 0;
      margin-bottom: 0;
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-decoration: none;
    }

    .link-icon {
      color: #fff;
      display: none;
      position: absolute;
      top: 12px;
      right: 15px;

      img {
        display: inline-block;
      }
    }

    &:hover {
      .link-icon {
        display: inline-block;
      }
    }
  }
`;

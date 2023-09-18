import { Container } from "../commonStyle";
import styled from "styled-components";
import { services } from "./constant";
import { Link } from "react-router-dom";
import UniqueAnim from "./uniqueAnim";

export function Services() {
  return (
    <StyledService>
      <Container>
        <h4 className="indicator">services</h4>
        <UniqueAnim />
        {Array.isArray(services) && services.length ? (
          <ul className="service-list">
            {services.map((item) => (
              <li
                className="service-item"
                key={item.title}
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="service-icon">
                  <img src={item.imgSrc} />
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <Link className="know-more-btn" to={item.href}>
                  {item.btnText}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </StyledService>
  );
}

const StyledService = styled.section`
  background: #ffffff;
  padding: 50px 0;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }

  .service-list {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 40px;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .service-item {
    min-height: 460px;
    grid-column-gap: 0px;
    grid-row-gap: 15px;
    border: 0.5px solid rgba(226, 226, 226, 0.5);
    flex-direction: column;
    align-items: stretch;
    padding: 10px 20px;
    transition: all 0.2s cubic-bezier(0.883, -0.005, 0.099, 0.989);
    display: flex;
    position: relative;
    overflow: hidden;

    &:hover {
      color: #fff;
      background-color: #1f1f1f !important;

      .know-more-btn {
        background-color: #1a8ef7;
      }

      .desc {
        color: #fff;
      }
    }
  }

  .service-icon {
    background-color: rgb(241, 241, 241);
    width: 130px;
    height: 130px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    img {
      width: 140px;
      height: 50px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2em;
    margin-top: 20px;
    margin-bottom: 10px;
    min-height: 60px;
  }

  .desc {
    min-height: 130px;
    color: rgba(48, 48, 48, 0.8);
    margin-top: 14px;
    margin-right: 15px;
    font-family: Inter Regular, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4em;
  }

  .know-more-btn {
    width: 150px;
    color: #fff;
    background-color: #101010;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    transition: background-color 0.2s;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .indicator {
    font-size: 16px;
    color: #101010;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

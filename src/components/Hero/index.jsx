import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { features } from "./constant";

export function Hero() {
  return (
    <StyledHero>
      <Container>
        <div className="main-hero">
          <h1 className="head">
            <span className="text-wrap">Transform your Ideas</span> into
            Stunning Products with Unico's Expert Team
          </h1>
          <p className="hero-subtxt">
            Build, Launch, and Scale your Products with Unmatched Efficiency
          </p>
          <div>
            <Link to={"/"} className="get-started">
              get started
            </Link>
          </div>
        </div>
        <div className="features">
          {Array.isArray(features) && features.length ? (
            <ul className="feature-list">
              {features.map((item) => (
                <li key={item.feature} className="feature-item">
                  <img src={item.icon} />
                  <div className="feature-text">{item.feature}</div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #000;
  color: #fff;

  .main-hero {
    text-align: center;
  }

  .head {
    width: 80%;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    font-size: 50px;
    line-height: 1.1em;
    font-weight: 700;

    .text-wrap {
      color: rgba(255, 255, 255, 0.5);
    }

    @media only screen and (max-width: 768px) {
      width: 90%;
      font-size: 25px;
    }
  }

  .hero-subtxt {
    width: 40%;
    color: #ffffff;
    text-align: center;
    margin: 40px auto 39px;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.2em;

    @media only screen and (max-width: 768px) {
      width: 100%;
      font-size: 14px;
    }
  }

  .get-started {
    width: 150px;
    color: #1f1f1f;
    text-transform: uppercase;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    transition: opacity 0.3s;
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin: 0 auto;
    text-decoration: none;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .features {
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .feature-list {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-auto-columns: 1fr;
  }

  .feature-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px 40px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .feature-text {
    width: 100%;
    height: 70px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    display: flex;
  }
`;

const Container = styled.div`
  width: 95%;
  max-width: 1300px;
  margin: 0 auto;
`;

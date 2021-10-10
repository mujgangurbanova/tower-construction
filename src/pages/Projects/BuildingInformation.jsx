import React from "react";
import styled from "styled-components";
import status from "images/status.png";
import block from "images/blok.png";
import home from "images/home.png";

function BuildingInformations() {
  return (
    <Building>
      <BuildingStatus>
        <div className="building-status">
          <Status>
            <img src={status} alt="status" />
            <span>Status</span>
          </Status>
          <Status>
            <img src={block} alt="block" />
            <span>Block</span>
          </Status>
          <Status>
            <img src={home} alt="home" />
            <span>Mənzil</span>
          </Status>
        </div>
        <div className="on-sale">
          <p>Satışdadır</p>
          <p>A</p>
          <p>18</p>
        </div>
      </BuildingStatus>
      <HomeStatus>
        <div className="home-status">
          <span className="header">Sahəsi: </span>
          <span className="text">
            73kv<sup>2</sup>
          </span>
        </div>
        <Line />
        <div className="home-status">
          <span className="header">Otaq sayı: </span>
          <span className="text">3</span>
        </div>
        <Line />
        <div className="home-status">
          <span className="header">Dəyəri: </span>
          <span className="text">70.000 AZN</span>
        </div>
        <Line />
        <div className="home-status">
          <span className="header">Kreditə uyğundur : </span>
          <span className="text">İpoteka</span>
        </div>
        <Line />
        <div className="home-status">
          <span className="header">Kredit müddəti: </span>
          <span className="text">7il</span>
        </div>
        <Line />
        <div className="home-status">
          <span className="header">Kredit faizi: </span>
          <span className="text">12%</span>
        </div>
      </HomeStatus>
    </Building>
  );
}

export default BuildingInformations;

const Building = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BuildingStatus = styled.div`
  background-color: var(--white);
  width: 300px;
  height: 75px;
  border-radius: 10px;

  .building-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .on-sale {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 15px;

    p {
      &:nth-child(1) {
        flex: 1;
      }
      &:nth-child(2) {
        flex: 2;
        text-align: center;
      }
      &:nth-child(3) {
        flex: 1;
        text-align: center;
      }
      color: var(--secondary-color);
    }
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  span {
    color: var(--main-color);
  }
`;

const HomeStatus = styled.div`
  width: 300px;
  height: 240px;
  background-color: var(--white);
  border-radius: 10px;
  margin-top: 1rem;

  .header {
    font-weight: 900;
    color: var(--secondary-color);
  }

  .text {
    color: var(--secondary-color);
  }

  .home-status{
      padding: 8px 20px;
  }
`;

 export const Line = styled.div`
height: 1px;
width: 100%;
background-color: var(--line);
`
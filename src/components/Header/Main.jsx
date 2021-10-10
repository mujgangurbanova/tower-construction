import React from "react";
import styled from "styled-components";
import Search from "images/search-icon.png";
import message from "images/message.png";
import notification from "images/notification.png";
import Person from "images/leyla.png";
import group from "images/group3.png";
import Projects from "pages/Projects/Sketch";
import AddCustomer from "pages/Projects/AddCustomer";
import ImageLogo from "images/logo-puple.png";


function Main() {
  return (
      <Header>
        <NavContainer>
          <div className="brand-name">
            <Logo src={ImageLogo} />
            <BrandName>TOWER Construction</BrandName>
          </div>

          <div className="input-bar">
            <Input autoComplete="off" placeholder="Axtarış"></Input>
            <img className="search" src={Search} alt="search-icon" />
          </div>
          <div className="person">
            <div className="msg-group">
              <img className="msg" src={message} alt="message" />
              <img className="group" src={group} alt="group" />
            </div>
            <img
              className="notification"
              src={notification}
              alt="notification"
            />
            <span className="person-name">Leyla Rəhimli</span>
            <img src={Person} alt="person" />
          </div>
        </NavContainer>
      </Header>
  );
}

export default Main;
const BrandName = styled.h1`
  margin-left: 1.25rem;
  font-family: inherit;
  font-size: 1.575rem;
  width: 50%;
  margin-top: 1.5625rem;
  line-height: 1;
  color: var(--main-color);
`;

const Logo = styled.img`
  height: 4.8125rem;
`;
export const Header = styled.div`
  background: var(--white);
  width: 100%;
  position: sticky ;
  top: 0;
  height: 8.5rem;
  z-index: 999;
  .brand-name {
    display: flex;
    align-items: center;
    /* margin-bottom: 1.25rem; */
    
  }
`;


const NavContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  .search {
    position: absolute;
    margin-left: 10px;
  }

  .input-bar {
    display: flex;
    align-items: center;
  }

  .person {
    display: flex;
    align-items: center;

    .msg-group {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .msg {
      position: relative;
      margin-right: 20px;
    }

    .group {
      position: absolute;
      top: 3.45rem;
    }

    .notification {
      margin-right: 20px;
    }

    .person-name {
      margin-right: 1rem;
    }
  }
`;

const Input = styled.input`
  position: relative;
  text-indent: 3rem;
  width: 27rem;
  height: 2.5rem;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  filter: drop-shadow(1px 2px 8px rgba(0, 0, 0, 0.25));
  border-radius: 0.3125rem;
`;



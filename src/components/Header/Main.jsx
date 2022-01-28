import React, { useState } from "react";
import styled from "styled-components";
import Search from "images/search-icon.png";
import message from "images/message.png";
import notification from "images/notification.png";
import Person from "images/leyla.png";
import group from "images/group3.png";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const Main = ({ hamburger, setHamburger }) => {
  //*Spinner for message and notification loading...
  const loading = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [spinnerNot, setSpinnerNot] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

  const handleSpinner = () => {
    setSpinner(!spinner);
    document
      .querySelector(".message-spinner")
      .classList.toggle("spinnerToggle");
  };
  const handleSpinnerNot = () => {
    setSpinnerNot(!spinnerNot);
    document
      .querySelector(".notification-spinner")
      .classList.toggle("spinnerToggle");
  };
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <Header>
      <NavContainer>
        <Hamburger
          hamburger={hamburger}
          onClick={() => setHamburger(!hamburger)}
        >
          <span />
          <span />
          <span />
        </Hamburger>

        <div className="input-bar">
          <Input autoComplete="off" placeholder="Axtarış"></Input>
          <img className="search" src={Search} alt="search-icon" />
        </div>
        <div className="person">
          <div className="msg-group" onClick={handleSpinner}>
            <img className="msg" src={message} alt="message" />
            <img className="group" src={group} alt="group" />
          </div>
          <div className="spinner message-spinner">
            <div className="arrow_box">
              <div className="sweet-loading">
                <BarLoader loading={loading} css={override} size={150} />
              </div>
            </div>
          </div>
          <img
            className="notification"
            src={notification}
            alt="notification"
            onClick={handleSpinnerNot}
          />
          <div className="spinner notification-spinner">
            <div className="arrow_box">
              <div className="sweet-loading">
                <BarLoader loading={loading} css={override} size={150} />
              </div>
            </div>
          </div>
          <span className="person-name">Leyla Rəhimli</span>
          <button
            className="icon-button"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <img src={Person} alt="person" />
          </button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </NavContainer>
      <Overlay hamburger={hamburger} />
    </Header>
  );
};

export default Main;
const Hamburger = styled.div`
  display: ${({ hamburger }) => (hamburger ? "none" : "flex")};
  flex-direction: column;
  cursor: pointer;
  span {
    width: 2rem;
    height: .2rem;
    background: var(--main-color);
    margin-bottom: .6rem;
  }
  span:nth-child(3) {
    width: 1.4rem;
    transition: width 0.15s ease-in-out 0s;
  }
  @media only screen and (min-width: 1360px) {
    display: none;
  }
`;

export const Header = styled.div`
  background: var(--white);
  position: sticky;
  height: 8.5rem;
  top: 0;
  z-index: 999;

`;

const NavContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  .search {
    position: absolute;
    margin-left: 1rem;
  }

  .input-bar {
    display: flex;
    align-items: center;
  }

  .person {
    display: flex;
    align-items: center;
    position: relative;

    .msg-group {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .msg {
      margin-right: 2rem;
    }

    .group {
      position: absolute;
      top: 1.056rem;
    }

    .notification {
      margin-right: 2rem;
      cursor: pointer;
      position: relative;
    }

    .person-name {
      margin-right: 1.6rem;
      font-size: 1.6rem;

    }
  }
  .icon-button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Input = styled.input`
  position: relative;
  text-indent: 4.8rem;
  width: 43.2rem;
  height: 4rem;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  filter: drop-shadow(1px 2px 8px rgba(0, 0, 0, 0.25));
  border-radius: 0.5rem;
`;

export const Overlay = styled.label`
  @media only screen and (min-width: 1024px) and (max-width: 1360px) {
    position: ${({ hamburger }) => (hamburger ? "fixed" : "initial")};
    inset: ${({ hamburger }) => (hamburger ? "0" : "")};
    transition: ${({ hamburger }) => (hamburger ? "opacity 0.3s ease 0s" : "")};
    opacity: ${({ hamburger }) => (hamburger ? "1" : "")};
    pointer-events: auto;
    background: var(--overlay);
  }
`;

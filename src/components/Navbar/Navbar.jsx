import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ImageLogo from "images/logo-puple.png";

const Navbar = ({ hamburger, setHamburger }) => {
  const myRef = useRef();
  useEffect(() => {
    if (hamburger) {
      document.body.style.overflow = "hidden";
    }

    window.scrollTo(0, 0);

    const checkIfClickedOutside = (e) => {
      if (hamburger && myRef.current && !myRef.current.contains(e.target)) {
        setHamburger(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line
  }, [hamburger]);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <Navigation ref={myRef} hamburger={hamburger} setHamburger={setHamburger}>
      <div className="brand-name">
        <Logo src={ImageLogo} />
        <BrandName>TOWER Construction</BrandName>
      </div>

      <NavLinks>
        <NavLists className={splitLocation[1] === "" ? "active-side" : ""}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.75 0.125H8C7.70172 0.125298 7.41575 0.24392 7.20483 0.454834C6.99392 0.665748 6.8753 0.951723 6.875 1.25V6.875H1.25C0.951723 6.8753 0.665748 6.99392 0.454834 7.20483C0.24392 7.41575 0.125298 7.70172 0.125 8V15.875H15.875V1.25C15.8747 0.951723 15.7561 0.665748 15.5452 0.454834C15.3343 0.24392 15.0483 0.125298 14.75 0.125ZM4.0625 14.75V10.8125H6.3125V14.75H4.0625ZM14.75 14.75H7.4375V10.25C7.4375 10.1008 7.37824 9.95774 7.27275 9.85225C7.16726 9.74676 7.02418 9.6875 6.875 9.6875H3.5C3.35082 9.6875 3.20774 9.74676 3.10225 9.85225C2.99676 9.95774 2.9375 10.1008 2.9375 10.25V14.75H1.25V8H8V1.25H14.75V14.75Z"
              fill="#505151"
            />
          </svg>
          <Link to="">Layihələr</Link>
        </NavLists>
        <NavLists
          className={splitLocation[1] === "customers" ? "active-side" : ""}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 8.5C9.69223 8.5 10.3689 8.29473 10.9445 7.91015C11.5201 7.52556 11.9687 6.97894 12.2336 6.33939C12.4985 5.69985 12.5678 4.99612 12.4327 4.31719C12.2977 3.63825 11.9644 3.01461 11.4749 2.52513C10.9854 2.03564 10.3617 1.7023 9.68282 1.56725C9.00388 1.4322 8.30015 1.50152 7.66061 1.76642C7.02107 2.03133 6.47444 2.47993 6.08986 3.05551C5.70527 3.63108 5.5 4.30777 5.5 5C5.5 5.92826 5.86875 6.8185 6.52513 7.47488C7.1815 8.13125 8.07174 8.5 9 8.5ZM9 2.5C9.49445 2.5 9.9778 2.64662 10.3889 2.92133C10.8 3.19603 11.1205 3.58648 11.3097 4.04329C11.4989 4.50011 11.5484 5.00278 11.452 5.48773C11.3555 5.97268 11.1174 6.41814 10.7678 6.76777C10.4181 7.1174 9.97268 7.3555 9.48773 7.45197C9.00277 7.54843 8.50011 7.49892 8.04329 7.3097C7.58648 7.12048 7.19603 6.80005 6.92133 6.38893C6.64662 5.9778 6.5 5.49446 6.5 5C6.5 4.33696 6.76339 3.70108 7.23223 3.23223C7.70107 2.76339 8.33696 2.5 9 2.5Z"
              fill="black"
            />
            <path
              d="M15.235 12.185C14.4332 11.3375 13.4669 10.6625 12.3953 10.2011C11.3237 9.73978 10.1692 9.50183 9.0025 9.50183C7.83579 9.50183 6.68135 9.73978 5.60973 10.2011C4.53811 10.6625 3.57185 11.3375 2.77 12.185C2.59616 12.3707 2.49961 12.6157 2.5 12.87V15.5C2.5 15.7652 2.60536 16.0196 2.79289 16.2071C2.98043 16.3947 3.23478 16.5 3.5 16.5H14.5C14.7652 16.5 15.0196 16.3947 15.2071 16.2071C15.3946 16.0196 15.5 15.7652 15.5 15.5V12.87C15.5018 12.6163 15.407 12.3715 15.235 12.185ZM14.5 15.5H3.5V12.865C4.20862 12.1189 5.06165 11.5247 6.00718 11.1187C6.95271 10.7126 7.97098 10.5033 9 10.5033C10.029 10.5033 11.0473 10.7126 11.9928 11.1187C12.9384 11.5247 13.7914 12.1189 14.5 12.865V15.5Z"
              fill="black"
            />
          </svg>
          <Link to="/customers">Müştərilər</Link>
        </NavLists>
        <NavLists
          className={splitLocation[1] === "notifications" ? "active-side" : ""}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3768 15.1005C17.2734 13.75 16.4944 13.0625 16.4944 9.33926C16.4944 5.92969 14.7533 4.71496 13.3203 4.125C13.1299 4.0468 12.9507 3.86719 12.8927 3.67168C12.6414 2.81617 11.9367 2.0625 11 2.0625C10.0632 2.0625 9.35813 2.8166 9.10934 3.67254C9.05133 3.8702 8.87216 4.0468 8.6818 4.125C7.24708 4.71582 5.5077 5.92625 5.5077 9.33926C5.50555 13.0625 4.72653 13.75 3.62309 15.1005C3.16591 15.66 3.56637 16.5 4.36602 16.5H17.6382C18.4336 16.5 18.8315 15.6574 18.3768 15.1005Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.75 16.5V17.1875C13.75 17.9168 13.4603 18.6163 12.9445 19.132C12.4288 19.6478 11.7293 19.9375 11 19.9375C10.2707 19.9375 9.57118 19.6478 9.05546 19.132C8.53973 18.6163 8.25 17.9168 8.25 17.1875V16.5"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="5" r="3" fill="#5E44A2" />
          </svg>
          <Link to="/notifications">Bildirişlər</Link>
        </NavLists>
        <NavLists
          className={splitLocation[1] === "statistics" ? "active-side" : ""}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.28571 1.33334V11.8095C1.28571 12.3147 1.48639 12.7992 1.8436 13.1564C2.20081 13.5136 2.68529 13.7143 3.19047 13.7143H13.6667"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.19043 9.90478L6.04757 7.04763L7.95233 8.9524L12.7142 4.19049"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7143 7.04763V4.19049H9.85712"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link to="/statistics">Statistika</Link>
        </NavLists>
        <NavLists className={splitLocation[1] === "exit" ? "active-side" : ""}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0121 2.16092V4.06545L12.233 2.8568V0.610428L11.6226 0H0.634845L0.0244171 0.610428V1.20376L0 1.22086V13.7835L0.439508 14.3451L6.54379 16.4449L7.32514 15.8711V14.6503H11.6226L12.233 14.0398V11.8301L11.0121 10.6092V13.4294H7.32514V3.30852L6.92226 2.74693L2.48566 1.22086H11.0121V2.16092ZM6.10428 14.9921L1.22086 13.3562V2.09987L6.10428 3.73582V14.9921ZM14.0643 7.91115H7.99661V6.69029H14.0154L12.0621 4.73692L12.9289 3.88232L15.9444 6.88563V7.75244L12.9045 10.7802L12.0499 9.92556L14.0643 7.91115Z"
              fill="black"
            />
          </svg>
          <Link to="/exit">Çıxış</Link>
        </NavLists>
      </NavLinks>
    </Navigation>
  );
};

export default Navbar;
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

const Navigation = styled.div`
  height: 100%;
  position: sticky;
  top: 0.5rem;
  background: var(--white);

  .brand-name {
    display: flex;
    align-items: center;
    padding: 0 47px;
    margin-bottom: 90px;
  }

  @media only screen and (max-width: 64rem) {
    display: ${({ hamburger }) => (hamburger ? "block" : "none")};
    z-index: ${({ hamburger }) => (hamburger ? "99999" : "-1")};
    top: ${({ hamburger }) => (hamburger ? "0" : "")};
    position: ${({ hamburger }) => (hamburger ? "fixed" : "initial")};
    width: ${({ hamburger }) => (hamburger ? "30%" : "")};
  }
`;

const NavLinks = styled.div`
  padding: 0rem 4.25rem 0 4.25rem;
`;

const NavLists = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s all;

  svg {
    margin-right: 1rem;
  }

  a {
    color: var(--secondary-color);
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      color: var(--main-color);
    }
  }
`;

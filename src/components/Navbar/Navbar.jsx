import React, { useRef,  useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ImageLogo from "images/logo-puple.png";
import { SideBarData } from "components/Data/Data";
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

  // split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <Navigation ref={myRef} hamburger={hamburger} setHamburger={setHamburger}>
      <div className="brand-name">
        <Logo src={ImageLogo} />
        <BrandName>TOWER Construction</BrandName>
      </div>

      {SideBarData.map((el, key) => (
        <NavLinks key={key}>
          <NavLists className={splitLocation[1] === el.path ? "active-side" : ""}>
            {el.icon} 
            <Link to={ "/" + el.path}>{el.title}</Link>
          </NavLists>
        </NavLinks>
      ))}
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

  @media only screen and (min-width: 64rem) and (max-width:85rem) {
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
  @media only screen and (min-width: 64rem) and (max-width:85rem) {
    width: 200px;
  }  

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

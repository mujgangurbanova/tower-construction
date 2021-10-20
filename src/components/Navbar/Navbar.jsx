import React, { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBarData } from "components/Data";
import ImageLogo from "images/logo-puple.png";


const Navbar = 	({hamburger,setHamburger}) => {
  const [isClicked, setIsClicked] = useState(0);
  const clicked = (which) => setIsClicked(which);
  const myRef = useRef();
  useEffect(() => {
    if(hamburger){
      document.body.style.overflow ="hidden";
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
      document.body.style.overflow ="";

    };
  }, [hamburger]);


  return (
    <Navigation ref ={myRef} hamburger={hamburger} setHamburger={setHamburger}>

      <div className="brand-name">
        <Logo src={ImageLogo} />
        <BrandName>TOWER Construction</BrandName>
      </div>
      


      {SideBarData.map((el, key) => (
        <NavLinks key={key}>
          <NavLists onClick={() => clicked(key)} isClicked={isClicked === key}>
            <img src={el.icon} alt="icons" />
            <Link to={el.path}>{el.title}</Link>
          </NavLists>
        </NavLinks>
      ))}
    </Navigation>
  );
}


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
  top: .5rem;
  background: var(--white);

  .brand-name {
    display: flex;
    align-items: center;
    padding: 0 47px;
    margin-bottom: 90px;
  }
  
  @media only screen and (max-width: 64rem) {
    display: ${({ hamburger }) => (hamburger ? "block" : "none")};
    z-index:  ${({ hamburger }) => (hamburger ? "99999" : "-1")};
    top: ${({ hamburger }) => (hamburger ? "0" : "")};
    position: ${({ hamburger }) => (hamburger ? "fixed" : "initial")};
    width: ${({ hamburger }) => (hamburger ? "30%" : "")};

    }

  
`;

const NavLinks = styled.div`
  padding: 0rem 3.25rem 0 3.25rem;
`;

const NavLists = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s all;
  background: ${({ isClicked }) => (isClicked ? "var(--hover)" : "none")};
  border-radius: ${({ isClicked }) => (isClicked ? "30px" : "0")};

  img {
    margin-right: 1rem;
  }

  a {
    color: ${({ isClicked }) =>
      isClicked ? "var(--main-color)" : "var(--secondary-color)"};
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      color: var(--main-color);
    }
  }
`;

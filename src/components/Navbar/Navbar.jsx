import React from "react";
import styled from "styled-components";
import projects from "images/projects.svg";
import customers from "images/customers.svg";
import notifications from "images/notifications.png";
import statistics from "images/statistics.png";
import exit from "images/log-out.png";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <Navigation>

      <NavLinks>
        <NavLists>
          <img src={projects} alt="projects" />
          <Link to="/">Layihələr</Link>
        </NavLists>
        <NavLists>
          <img src={customers} alt="customers" />
          <Link to="/customers">Müştərilər</Link>
        </NavLists>
        <NavLists>
          <img src={notifications} alt="notifications" />
          <a href="#!">Bildirişlər</a>
        </NavLists>
        <NavLists>
          <img src={statistics} alt="statistics" />
          <a href="#!">Statistika</a>
        </NavLists>
        <NavLists>
          <img src={exit} alt="exit" />
          <a href="#!">Çıxış</a>
        </NavLists>
      </NavLinks>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
flex: 1;
height: 100%;
position: sticky;
 top: 13.5rem;
  background: var(--white);

  
`;



const NavLinks = styled.div`
padding: 0rem 4.25rem 0 4.25rem;
`;

const NavLists = styled.div`
display: flex;
align-items: center;
padding: 20px;
transition: .3s all ;

img{
  margin-right: 1rem;
}

a{
  color:var(--secondary-color);
  font-size:1.2rem;
  text-align: center;
  text-decoration: none;

}
&:hover{
  background: var(--hover);
  border-radius:30px;
 
  a{
      color: var(--main-color);
  }
}

`;

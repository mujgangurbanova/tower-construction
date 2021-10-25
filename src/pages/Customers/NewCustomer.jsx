import React, { useState, useEffect } from "react";
import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import styled from "styled-components";
import AccordionContent from "./AccordionContent";
import Message from "./Message";



function NewCustomer() {
  const [whichOpen, setWhichOpen] = useState(-1);
  const [isToggled, setIsToggled] = useState(0);
  const toggled = (which) => setIsToggled(which);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const url = "http://localhost:8080/employees"
  const [empList, updateEmp] = useState([])

  const getEmp = () => {
    fetch(url)
    .then(res => res.json())
    .then(allEmp => updateEmp(allEmp))
  }


  useEffect(() => {
    getEmp()
  },[true])

  function openModal() {
    setIsOpen(true);
  }

  

  return (
    <NewCustomerWrapper>
      <NewCustomerContainer>
        <h1 className="customers">Müştərilər</h1>
        <CustomerLinks>
          <Links
            onClick={() => toggled(0)}
            isToggled={isToggled === 0}
            href="#!"
          >
            Hamısı
          </Links>
          <Links
            onClick={() => toggled(1)}
            isToggled={isToggled === 1}
            href="#!"
          >
            Kredit
          </Links>
          <Links
            onClick={() => toggled(2)}
            isToggled={isToggled === 2}
            href="#!"
          >
            İpoteka
          </Links>
          <Links
            onClick={() => toggled(3)}
            isToggled={isToggled === 3}
            href="#!"
          >
            Nəğd
          </Links>
        </CustomerLinks>
        <div className="home-owners">
          <h3>Müştəri</h3>
          <h3>Mənzil</h3>
          <h3>Dəyəri</h3>
          <h3>Status</h3>
        </div>
        <Aside>
          {empList.map((empInfo, key) => (
            <AccordionContent
              whichOpen={whichOpen}
              setWhichOpen={setWhichOpen}
              isOpen={key === whichOpen}
              key={key}
              which={key}
              empInfo={empInfo}
              openModal={openModal}
            />
          ))}
        </Aside>
        <Message
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
      </NewCustomerContainer>
    </NewCustomerWrapper>
  );
}

export default NewCustomer;

const NewCustomerWrapper = styled(BuildingInformation)``;

const CustomerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 43%;
`;

const Links = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  position: relative;
  margin-right: 10px;
  text-decoration: none;
  color: ${({ isToggled }) =>
    isToggled ? "var(--main-color)" : "var(--secondary-color)"};

  &:after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    background-color: var(--main-color);
    border-radius: 50%;
    top: 28px;
    left: 22px;
    display: ${({ isToggled }) => (isToggled ? "block" : "none")};
  }
`;

const NewCustomerContainer = styled(BuildingInformationContainer)`
height: 100vh;
  .customers {
    width: fit-content;
    margin-bottom: 1.25rem;
  }

  .home-owners {
    display: flex;
    align-items: center;
    width: 82%;
    justify-content: space-between;

    h3 {
      color: var(--secondary-color);
      width: 50px;
    }
  }
`;

const Aside = styled.aside`
`;

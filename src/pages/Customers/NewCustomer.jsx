import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import styled from "styled-components";
import AccordionContent from "./AccordionContent";
import Message from "./Message";
import axios from "axios";
import Pagination from "./Pagination";

function NewCustomer() {
  const [whichOpen, setWhichOpen] = useState(-1);
  const [isToggled, setIsToggled] = useState(0);
  const toggled = (which) => setIsToggled(which);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[customerPerPage] = useState(3);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  //*Fetch data from database
  const url = "http://localhost:8080/employees";
  const [empList, updateEmp] = useState([]);

  const getEmp = () => {
    axios
      .get(url)
      .then((res) => {
        updateEmp(res.data);
      })
      .catch((err) => alert("Can not get data", err));
  };

  useEffect(() => {
    getEmp();
  }, []);

  //Next button
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  //Previous button
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };


  //Get current cutomers
  const indexOfLastCustomer = currentPage * customerPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customerPerPage
  const currentCustomers = empList.slice(indexOfFirstCustomer,indexOfLastCustomer)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  //*Open modal.
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Müştərilər</title>
      </Helmet>
      <NewCustomerWrapper>
        <NewCustomerContainer>
          <h1 className="customers">Müştərilər</h1>
          <CustomerLinks>
            <Links onClick={() => toggled(0)} isToggled={isToggled === 0}>
              Hamısı
            </Links>
            <Links onClick={() => toggled(1)} isToggled={isToggled === 1}>
              Kredit
            </Links>
            <Links onClick={() => toggled(2)} isToggled={isToggled === 2}>
              İpoteka
            </Links>
            <Links onClick={() => toggled(3)} isToggled={isToggled === 3}>
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
            
            {currentCustomers.map((empInfo, key) => (
              
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
            <Pagination
        customerPerPage={customerPerPage}
        totalPosts={empList.length}
        paginate={paginate}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        handleNextbtn={handleNextbtn}
        handlePrevbtn={handlePrevbtn}
        currentPage={currentPage}

      />
          </Aside>
          <Message modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </NewCustomerContainer>
      </NewCustomerWrapper>
    </>
  );
}

export default NewCustomer;

const NewCustomerWrapper = styled(BuildingInformation)``;

const CustomerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  width: 55rem;
`;

const Links = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  position: relative;
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ isToggled }) =>
    isToggled ? "var(--main-color)" : "var(--secondary-color)"};

  &:after {
    position: absolute;
    content: "";
    width: .6rem;
    height: .6rem;
    background-color: var(--main-color);
    border-radius: 50%;
    top: 2.8rem;
    left: 2.2rem;
    display: ${({ isToggled }) => (isToggled ? "block" : "none")};
  }
`;

const NewCustomerContainer = styled(BuildingInformationContainer)`
  .customers {
    width: fit-content;
    margin-bottom: 2rem;
  }

  .home-owners {
    display: flex;
    align-items: center;
    width: 82rem;
    justify-content: space-between;

    h3 {
      color: var(--secondary-color);
      width: 5rem;
    }
  }
`;

const Aside = styled.aside`
position:relative;
`;

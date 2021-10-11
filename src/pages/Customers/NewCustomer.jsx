import React, { useState } from "react";
import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import styled from "styled-components";
import { CustomerData } from "components/Data";

function NewCustomer() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <NewCustomerWrapper>
      <NewCustomerContainer>
        <h1 className="customers">Müştərilər</h1>
        <div className="customer-links">
          <a href="#!">Hamısı</a>
          <a href="#!">Kredit</a>
          <a href="#!">İpoteka</a>
          <a href="#!">Nəğd</a>
        </div>
        <div className="home-owners">
          <h3>Müştəri</h3>
          <h3>Mənzil</h3>
          <h3>Dəyəri</h3>
          <h3>Status</h3>
        </div>
        <div className="aside">
          {CustomerData.map(
            (
              {
                customer,
                building,
                cost,
                statuscolor,
                statustitle,
                status,
                lastdate,
                lastpayment,
                first_payment,
                firspayment,
                month_payment,
                monthlypayment,
                duration_status,
                duration,
                chevron,
                button,
              },
              key
            ) => (
              <CustomerGroup onClick={handleClick}>
                <CustomerCards>
                  <CustomerGroupContainer
                    statuscolor={statuscolor}
                    statustitle={statustitle}
                    key={key}
                  >
                    <h1>{customer}</h1>
                    <p>{building}</p>
                    <p>{cost}</p>
                    <p
                      statuscolor={statuscolor}
                      statustitle={statustitle}
                      className="late-title"
                    >
                      {status}
                    </p>
                    <img src={chevron} alt="chevron" />
                  </CustomerGroupContainer>
                </CustomerCards>
                <CustomerDropdown isOpen={isOpen}>
                  <DropdownContainer>
                    <div className="payment-time">
                      <h1>{lastdate}</h1>
                      <p>{lastpayment}</p>
                    </div>
                    <div className="payment-time">
                      <h1>{first_payment}</h1>
                      <p>{firspayment}</p>
                    </div>
                    <div className="payment-time">
                      <h1>{month_payment}</h1>
                      <p>{monthlypayment}</p>
                    </div>
                    <div className="payment-time">
                      <h1>{duration_status}</h1>
                      <p>{duration}</p>
                    </div>
                    <button className="send-notification">{button}</button>
                  </DropdownContainer>
                </CustomerDropdown>
              </CustomerGroup>
            )
          )}
        </div>
      </NewCustomerContainer>
    </NewCustomerWrapper>
  );
}

export default NewCustomer;

const NewCustomerWrapper = styled(BuildingInformation)``;

const NewCustomerContainer = styled(BuildingInformationContainer)`
  .customers {
    width: fit-content;
    margin-bottom: 1.25rem;
  }

  .customer-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 43%;

    a {
      text-decoration: none;
      color: var(--secondary-color);
    }
  }

  .home-owners {
    display: flex;
    align-items: center;
    width: 79%;
    justify-content: space-between;

    h3 {
      color: var(--secondary-color);
      width: fit-content;
    }
  }
`;

const CustomerGroup = styled.div`
  cursor: pointer;
`;

const CustomerGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1.25rem;

  h1 {
    color: var(--secondary-color);
    font-size: 1rem;
  }
  p {
    color: var(--secondary-color);
  }

  .late-title {
    background-color: ${(props) => props.statuscolor};
    color: ${(props) => props.statustitle};
    padding: 6px 10px;
    border-radius: 10px;
  }
`;

const CustomerCards = styled.div`
  background-color: var(--white);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
  margin-top: 20px;
  height: 60px;
`;

const CustomerDropdown = styled.div`
  background-color: var(--white);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 90px;
  transition: all 0.5s linear;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  height: ${({ isOpen }) => (isOpen ? "90px" : "0")};
  margin-top: ${({ isOpen }) => (isOpen ? "5px" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-62%)")};
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  .payment-time {
    &:not(:first-child) {
      margin: 0 auto;
    }
    h1 {
      color: var(--secondary-color);
      font-size: 1rem;
      line-height: 2.2;
    }

    p {
      color: var(--secondary-color);
    }
  }

  .send-notification {
    color: var(--white);
    background-color: var(--orange);
    border: 1px solid var(--orange);
    padding: 10px 12px;
    border-radius: 15px;
    cursor: pointer;
  }
`;

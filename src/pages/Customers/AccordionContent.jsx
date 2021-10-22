import React from "react";
import styled from "styled-components";

function AccordionContent({ el, isOpen, setWhichOpen, which }) {
  return (
    <CustomerGroup>
      <CustomerCards
        isOpen={isOpen}
        onClick={() => (isOpen ? setWhichOpen(-1) : setWhichOpen(which))}
      >
        <CustomerGroupContainer
          statuscolor={el.statuscolor}
          statustitle={el.statustitle}
        >
          <h1>{el.customer}</h1>
          <p>{el.building}</p>
          <p>{el.cost}</p>
          <p
            statuscolor={el.statuscolor}
            statustitle={el.statustitle}
            className="late-title"
          >
            {el.status}
          </p>
          <Chevron src={el.chevron} alt="chevron" isOpen={isOpen} />
        </CustomerGroupContainer>
      </CustomerCards>
      <CustomerDropdown isOpen={isOpen}>
        <DropdownContainer>
          <PaymentTime>
            <h1>{el.lastdate}</h1>
            <p>{el.lastpayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{el.first_payment}</h1>
            <p>{el.firspayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{el.month_payment}</h1>
            <p>{el.monthlypayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{el.duration_status}</h1>
            <p>{el.duration}</p>
          </PaymentTime>
          <NotificationBtn>{el.button}</NotificationBtn>
        </DropdownContainer>
      </CustomerDropdown>
    </CustomerGroup>
  );
}

export default AccordionContent;
const CustomerGroup = styled.div``;

const CustomerGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1.25rem;

  h1 {
    color: var(--secondary-color);
    font-size: 1rem;
    width: 130px;
  }
  p {
    color: var(--secondary-color);
    width: 110px;
  }

  .late-title {
    background-color: ${(props) => props.statuscolor};
    color: ${(props) => props.statustitle};
    padding: 6px 10px;
    border-radius: 10px;
    width: 90px;
    text-align: center;
  }
`;

const CustomerCards = styled.div`
  background-color: var(--white);
  cursor: pointer;
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
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-52%)")};
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;
const Chevron = styled.img`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const PaymentTime = styled.div`
  &:not(:first-child) {
    width: 140px;
    text-align: right;
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

  &:nth-child(3){
    p{
      margin-right: 12px;
    }
  }
`;

const NotificationBtn = styled.button`
  color: var(--white);
  background-color: var(--orange);
  border: 1px solid var(--orange);
  padding: 10px 12px;
  border-radius: 15px;
  cursor: pointer;
`;

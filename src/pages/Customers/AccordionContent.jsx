import React from "react";
import styled from "styled-components";

function AccordionContent({ empInfo, isOpen, setWhichOpen, which, openModal }) {
  //* Functions to filter color
  const getPriorityColor = (status) => {
    if (status === "Gecikir")
      return { color: "var(--late-title)", backgroundColor: "var(--late-color)" };
    else return { color: "var(--dark-green)", backgroundColor: "var(--green)" };
  };
  const disableBtn = (button) => {
    if (button === "Ödənilib")
      return {
        display: "none",
      };
  };

  return (
    <CustomerGroup>
      <CustomerCards
        isOpen={isOpen}
        onClick={() => (isOpen ? setWhichOpen(-1) : setWhichOpen(which))}
      >
        <CustomerGroupContainer>
          <h1>{empInfo.customer}</h1>
          <p>{empInfo.building}</p>
          <p>{empInfo.cost}</p>
          <p style={getPriorityColor(empInfo.status)} className="late-title">
            {empInfo.status}
          </p>
          <Chevron className={empInfo.chevron} alt="chevron" isOpen={isOpen} />
        </CustomerGroupContainer>
      </CustomerCards>
      <CustomerDropdown isOpen={isOpen}>
        <DropdownContainer>
          <PaymentTime>
            <h1>{empInfo.lastdate}</h1>
            <p>{empInfo.lastpayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{empInfo.first_payment}</h1>
            <p>{empInfo.firspayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{empInfo.month_payment}</h1>
            <p>{empInfo.monthlypayment}</p>
          </PaymentTime>
          <PaymentTime>
            <h1>{empInfo.duration_status}</h1>
            <p>{empInfo.duration}</p>
          </PaymentTime>
          <NotificationBtn
            isOpen={isOpen}
            style={disableBtn(empInfo.status)}
            onClick={openModal}
          >
            {empInfo.button}
          </NotificationBtn>
        </DropdownContainer>
      </CustomerDropdown>
    </CustomerGroup>
  );
}

export default AccordionContent;
const CustomerGroup = styled.div`
max-width: 100rem;
`;

const CustomerGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  h1 {
    color: var(--secondary-color);
    font-size: 1.4rem;
    width: 13rem;
  }
  p {
    color: var(--secondary-color);
    width: 11rem;
    font-size: 1.6rem;
  }

  .late-title {
    padding: .6rem 1rem;
    border-radius: 1rem;
    width: 9rem;
    text-align: center;
    font-size: 1.6rem;

  }
`;

const CustomerCards = styled.div`
  background-color: var(--white);
  cursor: pointer;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
  margin-top: 2rem;
  height: 6rem;
`;

const CustomerDropdown = styled.div`
  background-color: var(--white);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  height: 9rem;
  transition: all .6s linear;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  height: ${({ isOpen }) => (isOpen ? "9rem" : "0")};
  margin-top: ${({ isOpen }) => (isOpen ? ".5rem" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10rem)")};

`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
`;
const Chevron = styled.i`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: var(--secondary-color);
`;

const PaymentTime = styled.div`
  &:not(:first-child) {
    width: 14rem;
    text-align: right;
    margin: 0 auto;
  }
  h1 {
    color: var(--secondary-color);
    font-size: 1.6rem;
    line-height: 2.2;
  }

  p {
    color: var(--secondary-color);
    font-size: 1.6rem;

  }

  &:nth-child(3) {
    p {
      margin-right: 1.2rem;
    }
  }
`;

const NotificationBtn = styled.button`
  color: var(--white);
  background-color: var(--orange);
  border: 1px solid var(--orange);
  padding: 1rem 1.2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  z-index: ${({ isOpen }) => (isOpen ? "" : "-11")};
`;

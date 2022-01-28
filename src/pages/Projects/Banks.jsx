import { BankInformation } from "components/Data/Data";
import React from "react";
import styled from "styled-components";

function Banks() {
  return (
    <Mortgage>
      <MortgageContainer>
        <h3 className="mortgage-title">İpoteka krediti olan banklar</h3>
        {BankInformation.map((el, key) => (
          <div className="bank-group" key={key}>
            <img src={el.img} alt="bank logos" />
            <span>{el.text}</span>
          </div>
        ))}
      </MortgageContainer>
    </Mortgage>
  );
}

export default Banks;

const Mortgage = styled.div``;

const MortgageContainer = styled.div`
  width: 29rem;
  height: 33rem;
  border-radius: 1rem;
  background-color: var(--white);
  padding: 1.5rem;

  .bank-group {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;

    img {
      margin-right: 1rem;
      width: 2.7rem;
    }
    span {
      text-align: left;
      color: var(--secondary-color);
      width: 9rem;
      font-size: 1.6rem;

    }
  }

  .mortgage-title {
    margin-bottom: 2rem;
    color: var(--main-color);
    font-size: 1.6rem;

  }
`;

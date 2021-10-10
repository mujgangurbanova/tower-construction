import React from "react";
import styled from "styled-components";
import info from "images/info.svg";

function Buyer() {
  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Alıcı</Label>
        <Input id="buyer" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="phone">Telefon nömrəsi</Label> <br />
        <div className="phone-number">
          <select>
            <option>50</option>
            <option>51</option>
            <option>55</option>
            <option>70</option>
            <option>77</option>
          </select>
          <Input id="phone" type="number" required />
        </div>
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="code">ŞV-nin nömrəsi</Label>
        <Input id="code" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <Label className="icon" htmlFor="card">
          Fin Kod
          <button>
            <img className="info" src={info} alt="info" />
          </button>
        </Label>

        <Input id="card" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <div className="payment">
          <span className="credit">Ödəniş növü</span>
          <select>
            <option>Kredit</option>
            <option>Nəğd</option>
          </select>
        </div>
      </BuyerContainer>
      <BuyerContainer>
        <span>İş yerindən arayış</span>
        <Input type="file" id="file" required></Input>
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Buyer;

export const BuyerWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 30%);
  row-gap: 20px;
  column-gap: 20px;
`;

export const BuyerContainer = styled.div`
  .phone-number {
    display: flex;
    select {
      margin-right: 5px;
    }
  }

  .payment {
    display: flex;
    flex-direction: column;
    select {
      height: 31px;
    }
  }

  button {
    position: absolute;
    width: 18px;
    height: 18px;
    background: transparent;
    cursor: pointer;
    right: -27px;
    outline: none;
    bottom: 2px;
    border: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  color: var(--label);
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  &:focus {
    outline: none !important;
  }
`;



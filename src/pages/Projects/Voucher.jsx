import React, { useState } from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";
import info from "images/info.svg";
import styled from "styled-components";
import { InfoButton } from "./Buyer";
import { PersonalCard } from "./Buyer";
import sexsiyyet from "images/sexsiyyet.png";

function Voucher() {
  //*Show personal card information
  const [show, setShow] = useState(false);
  function showIcon(e) {
    e.preventDefault();
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <BuyerWrapper>
      <VoucherContainer>
        <Label htmlFor="buyer">Zamin</Label>
        <Input autoComplete="off" id="buyer" type="text" />
      </VoucherContainer>
      <VoucherContainer>
        <Label htmlFor="phone">Telefon nömrəsi</Label> <br />
        <div className="phone-number">
          <select>
            <option>50</option>
            <option>51</option>
            <option>55</option>
            <option>70</option>
            <option>77</option>
          </select>
          <i className="fas fa-chevron-down"></i>

          <Input autoComplete="off" id="phone" type="number" />
        </div>
      </VoucherContainer>
      <VoucherContainer>
        <Label htmlFor="code">ŞV-nin nömrəsi</Label>
        <Input autoComplete="off" id="code" type="text" />
      </VoucherContainer>
      <VoucherContainer>
        <Label className="icon" htmlFor="card">
          Fin Kod
          <InfoBtn onClick={showIcon}>
            <img className="info" src={info} alt="info" />
          </InfoBtn>
          <PersonalCardImage show={show} src={sexsiyyet} />
        </Label>
        <Input autoComplete="off" id="card" type="text" />
      </VoucherContainer>
    </BuyerWrapper>
  );
}

export default Voucher;

const VoucherContainer = styled(BuyerContainer)`
  select {
    border: 0.1rem solid #fff;
    border-radius: 0.5rem;
    padding: 0 1rem;
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;
    width: 7rem;
  }
`;

const InfoBtn = styled(InfoButton)`
  bottom: 0.2rem;
`;

const PersonalCardImage = styled(PersonalCard)``;

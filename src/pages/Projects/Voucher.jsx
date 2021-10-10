import React from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";
import info from "images/info.svg";
import styled from "styled-components";


function Voucher() {
  return (
    <BuyerWrapper>
      <VoucherContainer>
        <Label htmlFor="buyer">Zamin</Label>
        <Input id="buyer" type="text" required />
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
          <Input id="phone" type="number" required />
        </div>
      </VoucherContainer>
      <VoucherContainer>
        <Label htmlFor="code">ŞV-nin nömrəsi</Label>
        <Input id="code" type="text" required/>
      </VoucherContainer>
      <VoucherContainer>
        <Label className="icon" htmlFor="card">Fin Kod
        <button>
          <img className="info" src={info} alt="info" />
        </button>
</Label>
        <Input id="card" type="text" required/>
      </VoucherContainer>
      

    </BuyerWrapper>
  );
}

export default Voucher;

const VoucherContainer = styled(BuyerContainer)`

button{
    bottom: 2px;
}

`
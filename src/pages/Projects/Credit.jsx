import React from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";

function Credit() {
  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Kreditin müddəti</Label>
        <Input autoComplete="off" id="buyer" type="text"  />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">İlkin ödəniş</Label>
        <Input  autoComplete="off" id="buyer" type="text"  />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Aylıq ödəniş</Label>
        <Input autoComplete="off" id="buyer" type="text"  />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Ödəniş tarixi</Label>
        <Input autoComplete="off" id="buyer" type="date"  />
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Credit;

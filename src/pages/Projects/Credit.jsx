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
        <Input id="buyer" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">İlkin ödəniş</Label>
        <Input id="buyer" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Aylıq ödəniş</Label>
        <Input id="buyer" type="text" required />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Ödəniş tarixi</Label>
        <Input id="buyer" type="date" required />
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Credit;

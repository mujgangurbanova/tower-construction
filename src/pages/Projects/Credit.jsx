import React from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";

function Credit({
  empcreditDuration,
  processCreditDuration,
  empfirstPayment,
  processFirstPayment,
  empmonthPayment,
  processMonthPayment,
  emplastPayment,
  processlastPayment,
}) {
  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Kreditin müddəti</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={empcreditDuration}
          onChange={(obj) => processCreditDuration(obj.target.value)}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">İlkin ödəniş</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={empfirstPayment}
          onChange={(obj) => processFirstPayment(obj.target.value)}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Aylıq ödəniş</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={empmonthPayment}
          onChange={(obj) => processMonthPayment(obj.target.value)}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Ödəniş tarixi</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="date"
          value={emplastPayment}
          onChange={(obj) => processlastPayment(obj.target.value)}
        />
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Credit;

import React from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";
import styled from "styled-components";

function Credit({
  empcreditDuration,
  processCreditDuration,
  empfirstPayment,
  processFirstPayment,
  empmonthPayment,
  processMonthPayment,
  emplastPayment,
  processlastPayment,
  empname,
  save,
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
        <DateInput
          autoComplete="off"
          id="buyer"
          type="date"
          value={emplastPayment}
          onChange={(obj) => processlastPayment(obj.target.valu)}
        />
        <i className="far fa-calendar"></i>
      </BuyerContainer>
      <div className="checkbox">
        <Checked>
          <label className="check-label">
            İlkin ödəniş olunub
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </Checked>
      </div>

      <button
        onClick={save}
        disabled={
          empcreditDuration === "" ||
          empfirstPayment === "" ||
          empmonthPayment === "" ||
          emplastPayment === "" ||
          empname === ""
        }
        className="add-customers"
      >
        Alıcını əlavə et
      </button>
    </BuyerWrapper>
  );
}

export default Credit;

const Checked = styled.div`
  label {
    color: var(--secondary-color);
  }
`;

const DateInput = styled(Input)`
  position: relative;
`;

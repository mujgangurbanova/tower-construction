import React from "react";
import { Input } from "./Buyer";
import { Label } from "./Buyer";
import { BuyerContainer } from "./Buyer";
import { BuyerWrapper } from "./Buyer";
import styled from "styled-components";

function Credit({ form, setState, save }) {
  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Kreditin müddəti</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={form.empcreditDuration}
          onChange={(e) => {
            setState({ ...form, empcreditDuration: e.target.value });
          }}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">İlkin ödəniş</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={form.empfirstPayment}
          onChange={(e) => {
            setState({...form, empfirstPayment: e.target.value });
          }}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Aylıq ödəniş</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={form.empmonthPayment}
          onChange={(e) => {
            setState({ ...form, empmonthPayment: e.target.value });
          }}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="buyer">Ödəniş tarixi</Label>
        <DateInput
          autoComplete="off"
          id="buyer"
          type="date"
          value={form.emplastPayment}
          onChange={(e) => {
            setState({ ...form, emplastPayment: e.target.value });
          }}
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
          form.empcreditDuration === "" ||
          form.empfirstPayment === "" ||
          form.empmonthPayment === "" ||
          form.emplastPayment === "" ||
          form.empname === ""
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

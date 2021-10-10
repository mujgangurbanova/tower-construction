import React from "react";
import styled from "styled-components";
import { Line } from "./BuildingInformation";
import Buyer from "./Buyer";
import Checkbox from "./Checkbox";
import Credit from "./Credit";
import Voucher from "./Voucher";

function AddCustomer() {
  return (
    <CustomerGroup>
      <CustomerGroupContainer>
        <h1 className="add-customer">Yeni alıcı əlavə et</h1>
        <FormContainer>
          <Buyer />
          <LineBottom />
          <Voucher />
          <LineBottom />
          <Credit/>
        </FormContainer>
          <Checkbox/>
      </CustomerGroupContainer>
    </CustomerGroup>
  );
}

export default AddCustomer;

const CustomerGroup = styled.div`
  margin-top: 1.25rem;
  padding: 1.25rem 1.875rem;

  background-color: var(--background);
`;
const CustomerGroupContainer = styled.div`
  padding: 0 20px;
  .add-customer {
    color: var(--secondary-color);
    width: fit-content;
  }
`;

const FormContainer = styled.form``;

const LineBottom = styled(Line)`
  background-color: var(--border-color);
  margin-top: 30px;
  width: 65%;
`;

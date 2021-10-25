import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "./BuildingInformation";
import Buyer from "./Buyer";
import Checkbox from "./Checkbox";
import Credit from "./Credit";
import Voucher from "./Voucher";
import axios from "axios";

function AddCustomer() {
  const [empname, processName] = useState("");
  const [empcreditDuration, processCreditDuration] = useState("");
  const [empfirstPayment, processFirstPayment] = useState("");
  const [empmonthPayment, processMonthPayment] = useState("");
  const [emplastPayment, processlastPayment] = useState("");

  const save = () => {
    let empInfo = {
      customer: empname,
      building: "20",
      cost: "40.000 AZN",
      status: "Ödənilib",
      lastdate: "Son ödəmə tarixi",
      lastpayment: emplastPayment,
      first_payment: "İlkin ödəniş",
      firspayment: empfirstPayment,
      month_payment: "Aylıq ödəniş",
      monthlypayment: empmonthPayment,
      duration_status: "Müddəti",
      duration: empcreditDuration,
      chevron: "fas fa-chevron-down",
      button: "Bildiriş göndər",
    };
    const url = "http://localhost:3002/employee";
    axios.post(url, empInfo).then((res) => console.log(res));
    processName("");
    processCreditDuration("");
    processFirstPayment("");
    processMonthPayment("");
    processlastPayment("");
  };
  return (
    <CustomerGroup>
      <CustomerGroupContainer>
        <h1 className="add-customer">Yeni alıcı əlavə et</h1>
        <FormContainer>
          <Buyer empname={empname} processName={processName} />
          <LineBottom />
          <Voucher />
          <LineBottom />
          <Credit
            empcreditDuration={empcreditDuration}
            processCreditDuration={processCreditDuration}
            empfirstPayment={empfirstPayment}
            processFirstPayment={processFirstPayment}
            empmonthPayment={empmonthPayment}
            processMonthPayment={processMonthPayment}
            emplastPayment={emplastPayment}
            processlastPayment={processlastPayment}
          />
        </FormContainer>
        <Checkbox save={save} />
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

const FormContainer = styled.div``;

const LineBottom = styled(Line)`
  background-color: var(--border-color);
  margin-top: 30px;
  width: 65%;
`;

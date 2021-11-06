import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "./BuildingInformation";
import Buyer from "./Buyer";
import Credit from "./Credit";
import Voucher from "./Voucher";
import axios from "axios";

function AddCustomer() {
  //*state for input value
  const [empname, processName] = useState("");
  const [empcreditDuration, processCreditDuration] = useState("");
  const [empfirstPayment, processFirstPayment] = useState("");
  const [empmonthPayment, processMonthPayment] = useState("");
  const [emplastPayment, processlastPayment] = useState("");

  const save = () => {
    let empInfo = {
      customer: empname,
      building: "12",
      cost: "80.000 AZN",
      status: "Gecikir",
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

    //*Post method to add new customer
    const url = "http://localhost:8080/employees";
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
            empname={empname}
            processCreditDuration={processCreditDuration}
            empfirstPayment={empfirstPayment}
            processFirstPayment={processFirstPayment}
            empmonthPayment={empmonthPayment}
            processMonthPayment={processMonthPayment}
            emplastPayment={emplastPayment}
            processlastPayment={processlastPayment}
            save={save}
          />
        </FormContainer>
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

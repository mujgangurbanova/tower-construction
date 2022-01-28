import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "./BuildingInformation";
import Buyer from "./Buyer";
import Credit from "./Credit";
import Voucher from "./Voucher";
import axios from "axios";

function AddCustomer() {
  //*state for input value
  const [form, setState] = useState({
    empname: "",
    empfirstPayment: "",
    empmonthPayment: "",
    emplastPayment: "",
    empcreditDuration: "",
  });

  const building = "7";
  const cost = "50.000 AZN";
  const status = "Gecikir";
  const lastdate = "Son ödəmə tarixi";
  const first_payment = "İlkin ödəniş";
  const month_payment = "Aylıq ödəniş";
  const duration_status = "Müddəti";
  const chevron = "fas fa-chevron-down";
  const button = "Bildiriş göndər";

  const save = () => {
    let empInfo = {
      customer: form.empname,
      building: building,
      cost: cost,
      status: status,
      lastdate: lastdate,
      lastpayment: form.emplastPayment,
      first_payment: first_payment,
      firspayment: form.empfirstPayment,
      month_payment: month_payment,
      monthlypayment: form.empmonthPayment,
      duration_status: duration_status,
      duration: form.empcreditDuration,
      chevron: chevron,
      button: button,
    };

    //*Post method to add new customer
    const url = "http://localhost:8080/employees";
    axios
      .post(url, empInfo)
      .then((res) => res.data)
      .catch((err) => alert("Can not add new customer", err));

    setState({
      ...form,
      empname: "",
      empfirstPayment: "",
      empmonthPayment: "",
      emplastPayment: "",
      empcreditDuration: "",
    });
  };
  return (
    <CustomerGroup>
      <CustomerGroupContainer>
        <h1 className="add-customer">Yeni alıcı əlavə et</h1>
        <FormContainer>
          <Buyer form={form} setState={setState} />
          <LineBottom />
          <Voucher />
          <LineBottom />
          <Credit
          form={form}
            save={save}
            setState={setState}
          />
        </FormContainer>
      </CustomerGroupContainer>
    </CustomerGroup>
  );
}

export default AddCustomer;

const CustomerGroup = styled.div`
  margin-top: 2rem;
  padding: 2rem 3rem;

  background-color: var(--background);
`;
const CustomerGroupContainer = styled.div`
  padding: 0 2rem;
  .add-customer {
    color: var(--secondary-color);
    width: fit-content;
    font-size: 1.6rem;
  }
`;

const FormContainer = styled.div``;

const LineBottom = styled(Line)`
  background-color: var(--border-color);
  margin-top: 3rem;
  width: 65%;
`;

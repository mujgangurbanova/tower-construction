import React, { useEffect, useState } from "react";
import styled from "styled-components";
import info from "images/info.svg";
import sexsiyyet from "images/sexsiyyet.png";
import pdf from "images/pdf.png";

function Buyer({ form, setState }) {
  //*Show personal card information
  const [show, setShow] = useState(false);
  function showIcon(e) {
    e.preventDefault();
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  //* to get input name
  useEffect(() => {
    document
      .getElementById("actual-btn")
      .addEventListener("change", (event) => {
        document.getElementById("file-chosen").textContent =
          event.target.files[0].name;
      });
  }, []);
  //*resetting input
  function resetInput() {
    document.getElementById("file-chosen").textContent = "Fayl seçilməyib";
  }

  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Alıcı</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={form.empname}
          onChange={(e) => {
            setState({ ...form, empname: e.target.value });
          }}
        />
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="phone">Telefon nömrəsi</Label> <br />
        <div className="phone-number">
          <select>
            <option>50</option>
            <option>51</option>
            <option>55</option>
            <option>70</option>
            <option>77</option>
          </select>
          <i className="fas fa-chevron-down"></i>

          <Input autoComplete="off" id="phone" type="number" />
        </div>
      </BuyerContainer>
      <BuyerContainer>
        <Label htmlFor="code">ŞV-nin nömrəsi</Label>
        <Input autoComplete="off" id="code" type="text" />
      </BuyerContainer>
      <BuyerContainer>
        <Label className="icon" htmlFor="card">
          Fin Kod
          <InfoButton onClick={showIcon}>
            <img className="info" src={info} alt="info" />
          </InfoButton>
          <PersonalCard src={sexsiyyet} show={show} alt="" />
        </Label>

        <Input autoComplete="off" id="card" type="text" />
      </BuyerContainer>
      <BuyerContainer>
        <div className="payment">
          <span className="credit">Ödəniş növü</span>
          <select>
            <option>Kredit</option>
            <option>Nəğd</option>
          </select>
          <i className="fas fa-chevron-down"></i>
        </div>
      </BuyerContainer>
      <BuyerContainer>
        <span className="arayis">İş yerindən arayış</span>
        <div className="choose-file">
          <label htmlFor="actual-btn" className="custom-file-upload">
            Faylı seç
            <input type="file" id="actual-btn" />
          </label>
          <img src={pdf} alt="icon" />
          <span id="file-chosen">Fayl seçilməyib</span>
        </div>
        <button className="delete" onClick={resetInput}>
          Sil
        </button>
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Buyer;

export const BuyerWrapper = styled.div`
  margin-top: 3.6rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 30%);
  gap: 2rem;
`;

export const InfoButton = styled.button`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  cursor: pointer;
  right: -2.7rem;
  outline: none;
  bottom: 0.2rem;
  border: none;
`;

export const BuyerContainer = styled.div`
  position: relative;

  input[type="file"] {
    display: none;
  }

  .choose-file {
    background-color: var(--white);
    padding: 0.5rem;

    img {
      position: absolute;
      left: 11.2rem;
      top: 4.2rem;
    }

    #file-chosen {
      margin-left: 4.4rem;
      font-size: 1.2rem;
    }
  }
  .custom-file-upload {
    border: 0.1rem solid #8970c9;
    border-radius: 2rem;
    background-color: #8970c9;
    display: inline-block;
    color: var(--white);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.6rem;

    position: relative;

    &:after {
      position: absolute;
      background-color: #cacbcb;
      content: "";
      width: 0.1rem;
      height: 4.5rem;
      left: 9.5rem;
      top: -0.7rem;
    }
  }

  .phone-number {
    display: flex;
    select {
      margin-right: 0.5rem;
      width: 7rem;
      position: relative;
      border: 0.1rem solid #fff;
      border-radius: 0.5rem;
      -webkit-appearance: none;
      padding: 0 1rem;
      cursor: pointer;
    }
    .fas {
      position: absolute;
      top: 4.4rem;
      left: 3.8rem;
      font-size: 1.4rem;
      color: var(--secondary-color);
    }
  }

  .arayis {
    margin-bottom: 0.9rem;
    display: block;
    color: var(--label);
    font-size: 1.6rem;
  }

  .payment {
    display: flex;
    flex-direction: column;
    select {
      position: relative;
      height: 4.3rem;
      border: 0.1rem solid #fff;
      -webkit-appearance: none;
      padding: 0 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .fas {
      position: absolute;
      top: 4.5rem;
      left: 25.5rem;
      font-size: 1.4rem;
      color: var(--secondary-color);
    }

    .credit {
      margin-bottom: 1rem;
      color: var(--label);
      font-size: 1.6rem;
    }
  }

  .delete {
    background: transparent;
    border: none;
    color: #df6161;
    font-weight: 500;
    position: absolute;
    font-size: 1rem;
    top: 4.6rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export const PersonalCard = styled.img`
  position: absolute;
  z-index: 1;
  bottom: -10.8rem;
  left: 8.3rem;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: ${({ show }) => (show ? ".3s" : ".5s")};
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  display: inline-block;
  color: var(--label);
  font-size: 1.6rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  height: 4.3rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.1rem solid #fff;
  &:focus {
    outline: none !important;
  }
`;

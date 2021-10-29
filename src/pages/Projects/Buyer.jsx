import React, { useEffect, useState } from "react";
import styled from "styled-components";
import info from "images/info.svg";
import sexsiyyet from "images/sexsiyyet.png";
import pdf from "images/pdf.png";

function Buyer({ empname, processName }) {
  const [show, setShow] = useState(false);
  function showIcon(e) {
    e.preventDefault();
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    document
      .getElementById("actual-btn")
      .addEventListener("change", (event) => {
        document.getElementById("file-chosen").textContent =
          event.target.files[0].name;
      });
  }, []);

  function resetInput(){
    document.getElementById("file-chosen").textContent = "Fayl seçilməyib"

  }


  return (
    <BuyerWrapper>
      <BuyerContainer>
        <Label htmlFor="buyer">Alıcı</Label>
        <Input
          autoComplete="off"
          id="buyer"
          type="text"
          value={empname}
          onChange={(obj) => processName(obj.target.value)}
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
        <button className="delete" onClick={resetInput}>Sil</button>
      </BuyerContainer>
    </BuyerWrapper>
  );
}

export default Buyer;

export const BuyerWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 30%);
  row-gap: 20px;
  column-gap: 20px;
`;

export const InfoButton = styled.button`
  position: absolute;
  width: 18px;
  height: 18px;
  background: transparent;
  cursor: pointer;
  right: -27px;
  outline: none;
  bottom: 2px;
  border: none;
`;

export const BuyerContainer = styled.div`
  position: relative;

  input[type="file"] {
    display: none;
  }

  .choose-file {
    background-color: var(--white);
    padding: 5px;

    img {
      position: absolute;
      left: 112px;
      top: 42px;
    }

    #file-chosen {
      margin-left: 44px;
      font-size: 12px;
    }
  }
  .custom-file-upload {
    border: 1px solid #8970c9;
    border-radius: 20px;
    background-color: #8970c9;
    display: inline-block;
    color: var(--white);
    padding: 5px 10px;
    cursor: pointer;
    position: relative;

    &:after {
      position: absolute;
      background-color: #cacbcb;
      content: "";
      width: 1px;
      height: 45px;
      left: 95px;
      top: -7px;
    }
  }

  .phone-number {
    display: flex;
    select {
      margin-right: 5px;
      width: 70px;
      position: relative;
      border: 1px solid #fff;
      border-radius: 5px;
      -webkit-appearance: none;
      padding: 0 10px;
      cursor: pointer;
    }
    .fas {
      position: absolute;
      top: 44px;
      left: 38px;
      font-size: 14px;
      color: var(--secondary-color);
    }
  }

  .arayis {
    margin-bottom: 9px;
    display: block;
    color: var(--label);
  }

  .payment {
    display: flex;
    flex-direction: column;
    select {
      position: relative;
      height: 43px;
      border: 1px solid #fff;
      -webkit-appearance: none;
      padding: 0 10px;
      border-radius: 5px;
      cursor: pointer;

    }

    .fas {
      position: absolute;
      top: 45px;
      left: 255px;
      font-size: 14px;
      color: var(--secondary-color);
    }

    .credit {
      margin-bottom: 10px;
      color: var(--label);
    }
  }

  .delete {
    background: transparent;
    border: none;
    color: #df6161;
    font-weight: 500;
    position: absolute;
    font-size: 10px;
    top: 46px;
    right: 10px;
    cursor: pointer;
  }
`;

export const PersonalCard = styled.img`
  position: absolute;
  z-index: 1;
  bottom: -108px;
  left: 83px;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: ${({ show }) => (show ? ".3s" : ".5s")};
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  color: var(--label);
`;

export const Input = styled.input`
  padding: 5px;
  height: 43px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #fff;
  &:focus {
    outline: none !important;
  }
`;

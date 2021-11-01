import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import * as R from "ramda";

//*Modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    background: "transparent",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Message({ modalIsOpen, setIsOpen }) {
  const [message, setMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  //*To get input value and disable to send message if input is empty and empty space is not allowed.
  const handleChange = (e) => {
    setInputValue(e.target.value);
    let input = R.trim(e.target.value);
    if (input.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //*Close modal

  function closeModal() {
    setIsOpen(false);
  }
  //* After sending message modal close itself and reset input.
  function sent() {
    if (inputValue) {
      setMessage(!message);
      setTimeout(() => {
        setMessage(message);
        closeModal();
        setInputValue("");
      }, 300);
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Message Modal"
    >
      <MessageBox>
        <MessageBoxContainer>
          <Header>Mesajınız</Header>
          <textarea
            type="text"
            spellCheck="false"
            value={inputValue}
            onChange={handleChange}
          ></textarea>

          <ButtonGroup>
            <Send onClick={sent} disabled={disabled}>
              Göndər{" "}
            </Send>
            <Close onClick={closeModal}>Bağla</Close>
          </ButtonGroup>
          <MessageSent message={message}>Mesaj uğurla göndərildi!</MessageSent>
        </MessageBoxContainer>
      </MessageBox>
    </Modal>
  );
}

export default Message;

const MessageBox = styled.div`
  width: 300px;
  height: 270px;
  background: var(--white);
  box-shadow: 0px 6px 19px -4px rgba(0, 0, 0, 0.13);
  border-radius: 20px;
`;

const MessageBoxContainer = styled.div`
  padding: 20px;

  textarea {
    border: 1px solid var(--text-area);
    background: var(--background);
    color: var(--secondary-color);
    width: 250px;
    height: 130px;
    resize: none;
    padding: 10px;
    outline: 1px solid var(--outline);
  }
`;

const MessageSent = styled.p`
  font-size: 12px;
  color: red;
  margin-left: 10px;
  display: ${({ message }) => (message ? "block" : "none")};
`;

const Header = styled.h1`
  font-size: 1rem;
  color: var(--main-color);
  font-weight: 500;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Send = styled.button`
  width: 147px;
  cursor: pointer;
  height: 33px;
  background: var(--main-color);
  border: 1px solid var(--main-color);
  color: var(--white);
  border-radius: 5px;
  font-size: 12px;
`;

const Close = styled.button`
  cursor: pointer;

  background: transparent;
  border: none;
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
`;

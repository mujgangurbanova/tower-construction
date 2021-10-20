import React from "react";
import styled from "styled-components";

function Message() {
  return (
      <MessageBox>
        <MessageBoxContainer>
          <Header>Mesajınız</Header>
          <TextArea></TextArea>
          <ButtonGroup>
            <Send>Göndər</Send>
            <Close>Bağla</Close>
          </ButtonGroup>
        </MessageBoxContainer>
      </MessageBox>
  );
}

export default Message;



const MessageBox = styled.div`
  width: 300px;
  height: 250px;
  background: var(--white);
  border-radius: 20px;
  margin-left: 20px;
`;

const MessageBoxContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 1rem;
  color: var(--main-color);
  font-weight: 500;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid var(--text-area);
  background: var(--background);
  color: var(--secondary-color);
  width: 250px;
  height: 130px;
  resize: none;
  outline: 1px solid var(--outline);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px;
`;

const Send = styled.button`
width:147px;
height:33px;
background: var(--main-color);
border: 1px solid var(--main-color);
color: var(--white);
border-radius: 5px;
font-size: 12px;
`;

const Close = styled.button`
background: transparent;
border: none;
color: var(--main-color);
font-size: 12px;
font-weight:500;
`;

import React, { useState } from "react";
import styled from "styled-components";
import chevron from "images/chevron.png";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--background)',
  border: '2px solid var(--main-color)',
  boxShadow: 24,
  p: 5,
};


function AddNewProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  function openDrop() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <AddNewProjectWrapper>
      <AddNewProjectContainer>
        <div className="btn-grp">
          <AddButton onClick={handleOpen}>
            <i className="fas fa-plus"></i>
            Yeni layihə
          </AddButton>
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" >
              Layihə tapılmadı.
            </Typography>
          </Box>
        </Fade>
      </Modal>
          <Complex>
            <div className="dropdown single">
              <div className="dropdown__content" onClick={openDrop}>
                <div className="dropdown__content-selected">"Pearl" Kompleksi</div>
                <Chevron isOpen={isOpen}>
                  <img className="chevron" src={chevron} alt="Chevron down" />
                </Chevron>
              </div>
              <DropdownContainer className="dropdown__container" isOpen={isOpen}>
                <ul>
                  <li></li>
                </ul>
              </DropdownContainer>
            </div>
          </Complex>
        </div>
        <StartDate>
          <div className="start-date">
            <span>09.10.2021</span>
            <span>31.10.2021</span>
          </div>
          <div className="time-line"></div>
        </StartDate>
      </AddNewProjectContainer>
    </AddNewProjectWrapper>
  );
}

export default AddNewProject;

const AddNewProjectWrapper = styled.div``;

const Chevron = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 0.2rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Complex = styled.div`
  cursor: pointer;
  width: 200px;
  border: 1px solid var(--border);
  border-radius: 5px;

  .dropdown {
    position: relative;
  }

  .dropdown.single {
    padding: 0.75rem;
  }

  .dropdown__content {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    user-select: none;
  }

  .dropdown__content-selected {
    font-size: 1rem;
  }
`;

const DropdownContainer = styled.div`
  background-color: var(--white);
  border: 1px solid var(--border);
  max-height: 6.25rem;
  padding: 0.3125rem;
  position: absolute;
  top: 100%;
  left: 1px;
  margin-top: 10px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: ${({ isOpen }) => (isOpen ? ".3s" : "0.4s")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-52%)")};
  width: 100%;

  li {
    list-style-type: none;
    padding: 10px;
  }
`;

const AddNewProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;

  .btn-grp {
    display: flex;
  }
`;

const AddButton = styled.button`
  display: inline-block;
  cursor: pointer;
  margin-right: 1rem;
  padding: 8px 30px;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--main-color);
  border: 1px solid var(--main-color);

  .fas {
    float: left;
    margin-right: 10px;
    margin-top: 3px;
    color: var(--white);
  }
`;

const StartDate = styled.div`
  width: 260px;
  height: 45px;
  background-color: var(--white);
  border-radius: 10px;

  .start-date {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;

    span {
      font-size: 14px;
      color: var(--main-color);
    }
  }

  .time-line {
    height: 4px;
    width: 90%;
    border-radius: 12px;
    margin: 0 auto;
    background: linear-gradient(
      to left,
      var(--line-color) 19%,
      var(--main-color) 14%
    );
  }
`;

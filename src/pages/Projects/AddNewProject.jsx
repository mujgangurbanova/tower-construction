import React from "react";
import styled from "styled-components";
import chevron from "images/chevron.png";

function AddNewProject() {
  return (
    <AddNewProjectWrapper>
      <AddNewProjectContainer>
        <div className="btn-grp">
          <AddButton>
            <i className="fas fa-plus"></i>
            Yeni layihə
          </AddButton>
          <div class="language">
            <div class="dropdown single">
              <div class="dropdown__content">
                <div class="dropdown__content-selected">"Pearl" Kompleksi</div>
                <div class="dropdown__content-icon">
                  <img class="chevron" src={chevron} alt="Chevron down" />
                </div>
              </div>
              {/* <div class="dropdown__container">
              <ul>
                <li>ru</li>
                <li>az</li>
              </ul>
            </div> */}
            </div>
          </div>
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

const AddNewProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .language {
    cursor: pointer;
    width: 200px;
    border: 1px solid var(--border);
    border-radius: 5px;
  }

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

  .dropdown__content-icon {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 0.2rem;
  }

  .btn-grp{
      display: flex;
  }
`;

const AddButton = styled.button`
  display: inline-block;
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

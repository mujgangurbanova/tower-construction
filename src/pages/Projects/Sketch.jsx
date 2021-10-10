import React from "react";
import styled from "styled-components";
import AddCustomer from "./AddCustomer";
import Banks from "./Banks";
import BuildingInformations from "./BuildingInformation";
import ProjectDetails from "./ProjectDetails";
import SketchFigure from "./SketchFigure";

function Sketch() {
  return (
    <BuildingInformation>
      <Wrapper>
        <BuildingInformationContainer>
          <h1 className="building-title">Mənzil haqqında məlumatlar</h1>
          <SketchContainer>
            <SketchFigure />
            <BuildingInformations />
            <Banks />
          </SketchContainer>
        </BuildingInformationContainer>
        <AddCustomer />
        <ProjectDetails />
      </Wrapper>
    </BuildingInformation>
  );
}

export default Sketch;

export const BuildingInformation = styled.section`
  flex: 3;
  width: 70%;
  margin-top: 40px;
  margin-left: 20px;
`;

const SketchContainer = styled.div`
  display: flex;
  padding: 1.25rem 0;
  justify-content: space-between;
`;

const BuildingInformationContainer = styled.div`
  padding: 1.25rem 1.875rem;
  background-color: var(--background);

  .building-title {
    color: var(--main-color);

    font-size: 1.25rem;
    width: fit-content;
    margin-left: 6px;
  }
`;

export const Wrapper = styled.div``;

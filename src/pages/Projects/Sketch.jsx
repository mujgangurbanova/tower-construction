import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import AddCustomer from "./AddCustomer";
import Banks from "./Banks";
import BuildingInformations from "./BuildingInformation";
import ProjectDetails from "./ProjectDetails";
import SketchFigure from "./SketchFigure";

function Sketch() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Layihələr</title>
      </Helmet>
      <BuildingInformation>
        <ProjectDetails />
        <BuildingInformationContainer id="projects">
          <h1 className="building-title">Mənzil haqqında məlumatlar</h1>
          <SketchContainer>
            <SketchFigure />
            <BuildingInformations />
            <Banks />
          </SketchContainer>
        </BuildingInformationContainer>
        <AddCustomer />
      </BuildingInformation>
    </>
  );
}

export default Sketch;

export const BuildingInformation = styled.section``;

const SketchContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;

  
`;

export const BuildingInformationContainer = styled.div`
  padding: 2rem 3rem;
  background-color: var(--background);
  margin-top: 1rem;

  .building-title {
    color: var(--main-color);

    font-size: 2rem;
    width: fit-content;
    margin-left: .6rem;
  }
`;

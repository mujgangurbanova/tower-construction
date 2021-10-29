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
  padding: 1.25rem 0;
  justify-content: space-between;

  @media only screen and (max-width: 64rem) {
    /* flex-wrap: wrap; */
  }
`;

export const BuildingInformationContainer = styled.div`
  padding: 1.25rem 1.875rem;
  background-color: var(--background);
  margin-top: 10px;

  .building-title {
    color: var(--main-color);

    font-size: 1.25rem;
    width: fit-content;
    margin-left: 6px;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import AddNewProject from "./AddNewProject";
import Card from "pages/Projects/Card"

function ProjectDetails() {
  return (
    <ProjectDetWrapper>
      <ProjectDetContainer>
        <AddNewProject />
        <Card />
      </ProjectDetContainer>
    </ProjectDetWrapper>
  );
}

export default ProjectDetails;

const ProjectDetWrapper = styled.div`
  margin-top: 1.25rem;
  background-color: var(--background);
`;
const ProjectDetContainer = styled.div`
  padding: 1.25rem 1.875rem;
`;

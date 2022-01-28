import React from "react";
import styled from "styled-components";
import { Residences } from "components/Data/Data";

function ResidenceGroup() {
  return (
    <ResidenceGroupWrapper>
      <ResidenceGroupContainer>
        {Residences.map(({ img, title, cost }, key) => (
          <ResidenceCard key={key}>
            <img src={img} alt="Residence" />
            <p>{title}</p>
            <span>{cost}</span>
          </ResidenceCard>
        ))}
      </ResidenceGroupContainer>
    </ResidenceGroupWrapper>
  );
}

export default ResidenceGroup;

const ResidenceGroupWrapper = styled.div``;

const ResidenceGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const ResidenceCard = styled.div`
  width: 10.5rem;
  img {
    border-radius: 1rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--secondary-color);
    font-weight: 500;
  }

  span {
    font-size: 1rem;
  }
`;

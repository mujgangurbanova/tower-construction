import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Area from "./Area";
import Bar from "./Bar";
import DonutChart from "./DonutChart";

import ResidenceGroup from "./ResidenceGroup";

function Statistics() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistika</title>
      </Helmet>
      <StatisticsWrapper>
        <StatisticsContainer>
          <Sales>
            <SalesArea>
              <Area />
            </SalesArea>
            <DonutTotal>
              <DonutChart />
            </DonutTotal>
          </Sales>
          <TopProjectSales>
            <ResidenceWrapper>
              <ResidenceContainer>
                <h1 className="sales-increasing">Satışı artan layihələr</h1>
                <ResidenceGroup />
              </ResidenceContainer>
            </ResidenceWrapper>
            <Bar />
          </TopProjectSales>
        </StatisticsContainer>
      </StatisticsWrapper>
    </>
  );
}

export default Statistics;

const StatisticsWrapper = styled(BuildingInformation)`
  @media only screen and (max-width: 136rem) {
    margin: 0 auto;
  }
`;

const StatisticsContainer = styled(BuildingInformationContainer)``;

const Sales = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const SalesArea = styled.div`
  background: var(--white);
  border-radius: 1rem;
  width: 63rem;
  height: 25rem;
  margin-right: 2rem;
`;

const DonutTotal = styled.div`
  background-color: var(--white);
  border-radius: 1rem;
  height: 25rem;
  width: 100%;
  max-width: 30rem;
  display: grid;
  align-items: center;
  grid-template-columns: 20rem 1fr;
`;

const TopProjectSales = styled.div`
  display: flex;
  align-items: center;
`;

const ResidenceWrapper = styled.div`
  background: var(--white);
  border-radius: 1rem;
  margin-right: 2rem;

  width: 63rem;
  height: 25rem;
`;

const ResidenceContainer = styled.div`
  padding: 3rem 2rem;
  .sales-increasing {
    color: var(--secondary-color);
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

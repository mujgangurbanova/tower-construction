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
  @media only screen and (max-width: 85rem) {
    margin: 0 auto;
  }
`;

const StatisticsContainer = styled(BuildingInformationContainer)``;

const Sales = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SalesArea = styled.div`
  background: var(--white);
  border-radius: 10px;
  width: 630px;
  height: 250px;
  margin-right: 20px;
`;

const DonutTotal = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  height: 250px;
  width: 100%;
  max-width: 300px;
  /* width: 300px; */
  display: flex;
  align-items: center;
`;

const TopProjectSales = styled.div`
  display: flex;
  align-items: center;
`;

const ResidenceWrapper = styled.div`
  background: var(--white);
  border-radius: 10px;
  margin-right: 20px;

  width: 630px;
  height: 250px;
`;

const ResidenceContainer = styled.div`
  padding: 30px 20px;
  .sales-increasing {
    color: var(--secondary-color);
    font-size: 1rem;
    font-weight: 500;
  }
`;

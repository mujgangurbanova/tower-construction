import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import React from "react";
import styled from "styled-components";
import Area from "./Area";
import Bar from "./Bar";
import DonutChart from "./DonutChart";
import ResidenceGroup from "./ResidenceGroup";

function Statistics() {
  return (
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
                  <ResidenceGroup/>
              </ResidenceContainer>
          </ResidenceWrapper>
          <Bar />
        </TopProjectSales>
      </StatisticsContainer>
    </StatisticsWrapper>
  );
}

export default Statistics;

const StatisticsWrapper = styled(BuildingInformation)``;

const StatisticsContainer = styled(BuildingInformationContainer)``;

const Sales = styled.div``;

const SalesArea = styled.div``;

const DonutTotal = styled.div``;

const TopProjectSales = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ResidenceWrapper = styled.div`
background: var(--white);
border-radius: 10px;
width: 630px;
height: 250px;
`;

const ResidenceContainer = styled.div`
padding: 30px 20px;
.sales-increasing{
    color: var(--secondary-color);
    font-size: 1rem;
    font-weight: 500;
}
`
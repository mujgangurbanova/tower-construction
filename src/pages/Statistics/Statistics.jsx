import { BuildingInformationContainer } from "pages/Projects/Sketch";
import { BuildingInformation } from "pages/Projects/Sketch";
import React from "react";
import styled from "styled-components";
import Area from "./Area";
import Bar from "./Bar";
import DonutChart  from "./DonutChart";

import ResidenceGroup from "./ResidenceGroup";

function Statistics() {
  return (
    <StatisticsWrapper>
      <StatisticsContainer>
        <Sales>
          <SalesArea>
            <div className="sales">
              <span>Satışlar</span>
            <div className="area-chart-title">
              <a href="#!">Son 12 ay</a>
              <a href="#!">Son 8 həftə</a>
              <a href="#!">Aylıq</a>
              <a href="#!">2020</a>
              </div> 

            </div>
            <Area />
          </SalesArea>
          <DonutTotal >
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
  );
}

export default Statistics;

const StatisticsWrapper = styled(BuildingInformation)``;

const StatisticsContainer = styled(BuildingInformationContainer)``;

const Sales = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SalesArea = styled.div`
  background: var(--white);
  border-radius: 10px;
  width: 630px;
  height: 250px;

  .sales{
    display: flex;
    justify-content: space-between; 
    padding: 10px 0 10px 10px;

    span{
      font-size: 16px;
    }

    a{
      color: var(--light-black);
      font-size: 12px;
      margin-right: 20px;
      text-decoration: none;
    }
  }
`;

const DonutTotal = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  height: 250px;
  width: 300px;
`;

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
  .sales-increasing {
    color: var(--secondary-color);
    font-size: 1rem;
    font-weight: 500;
  }
`;

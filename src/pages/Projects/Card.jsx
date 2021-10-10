import { Cards } from "components/Data";
import styled from "styled-components";
import React from "react";

function Card() {
  return (
    <CardWrapper>
      {Cards.map(({ id, room, area, color, secondcolor, sup, link, title }) => (
        <CardContainer color={color} secondcolor={secondcolor} key={id}>
          <CardDetails secondcolor={secondcolor} color={color}>
            <div color={color} className="card-title">
              {id}
            </div>
            <span secondcolor={secondcolor} className="home-current-status">
              {title}
            </span>
            <div className="room-size">
              <span>
                {area}
                <sup>{sup}</sup>
              </span>
              <div className="home-detail">
                <span className="room-number">{room}</span>
                <a className="detailed" href="#!">
                  {link}
                </a>
              </div>
            </div>
          </CardDetails>
        </CardContainer>
      ))}
    </CardWrapper>
  );
}

export default Card;

export const CardContainer = styled.div`
  background-color: var(--white);
  height: 170px;
  width: 175px;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 30px;
`;

export const CardDetails = styled.div`
  .card-title {
    border-top-left-radius: 10px;
    padding: 8px;
    border-top-right-radius: 10px;
    color: var(--white);
    background-color: ${(props) => props.color};
  }

  .home-current-status {
      font-weight: bold;
    display: block;
    margin: 10px;
    color: ${(props) => props.secondcolor};
  }

  .room-size {
    display: flex;
    flex-direction: column;
    padding: 10px;

    span {
      color: var(--secondary-color);
    }
  }

  .home-detail {
    display: flex;
    justify-content: space-between;
    margin-top: 11px;

    .room-number {
      color: var(--secondary-color);
    }

    .detailed {
      text-decoration: none;
      color: var(--main-color);
    }
  }
`;

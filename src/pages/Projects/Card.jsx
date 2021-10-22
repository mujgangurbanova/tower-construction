import styled from "styled-components";
import React, { useState, useEffect } from "react";
import search from "images/search-ground.png";
import axios from "axios";
import { cardData } from "redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function Card() {
  const [isToggled, setIsToggled] = useState(0);
  const [isToggled2, setIsToggled2] = useState(0);
  const toggled = (which) => setIsToggled(which);
  const toggled2 = (which2) => setIsToggled2(which2);

  const CardsLists = useSelector((state) => state.cardDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => dispatch(cardData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const getPriorityColor = (title) => {
    if (title === "Satılıb") return { color: "#5E44A2" };
    else if (title === "Kredit") return { color: "#FDA242" };
    else return { color: "#3B7EA4" };
  };
  const getColor = (id) => {
    if (id === "Satılıb") return { backgroundColor: "#9C89CE" };
    else if (id === "Kredit") return { backgroundColor: "#FDA242" };
    else return { backgroundColor: "#3B7EA4" };
  };
  return (
    <>
      <FilterWrapper>
        <FilterContainer>
          <Toggle
            className="toggled-link"
            onClick={() => toggled(0)}
            isToggled={isToggled === 0}
          >
            Hamısı
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() => toggled(1)}
            isToggled={isToggled === 1}
          >
            Kredit
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() => toggled(2)}
            isToggled={isToggled === 2}
          >
            İpoteka
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() => toggled(3)}
            isToggled={isToggled === 3}
          >
            Satılıb
          </Toggle>
          <Input>
            <input type="text" placeholder="Mərtəbə axtar" />
            <img src={search} alt="search-ground" />
          </Input>
          <Block>
            <BlockContainer>
              <Span onClick={() => toggled2(0)} isToggled2={isToggled2 === 0}>
                Blok A
              </Span>
              <Span onClick={() => toggled2(1)} isToggled2={isToggled2 === 1}>
                Blok B
              </Span>
              <Span onClick={() => toggled2(2)} isToggled2={isToggled2 === 2}>
                Blok C
              </Span>
            </BlockContainer>
          </Block>
        </FilterContainer>
      </FilterWrapper>

      <CardWrapper>
        {CardsLists.map((item, key) => (
          <CardContainer key={key}>
            <CardDetails>
              <CardTitle style={getColor(item.title)}>{item.id}</CardTitle>
              <span
                style={getPriorityColor(item.title)}
                className="home-current-status"
              >
                {item.title}
              </span>
              <div className="room-size">
                <span>
                  {item.area}
                  <sup>{item.sup}</sup>
                </span>
                <div className="home-detail">
                  <span className="room-number">{item.room}</span>
                  <a className="detailed" href="#projects">
                    {item.link}
                  </a>
                </div>
              </div>
            </CardDetails>
          </CardContainer>
        ))}
      </CardWrapper>
    </>
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
  .home-current-status {
    font-weight: bold;
    display: block;
    margin: 10px;
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

const CardTitle = styled.div`
  border-top-left-radius: 10px;
  padding: 8px;
  border-top-right-radius: 10px;
  color: var(--white);
`;
const FilterWrapper = styled.div`
  margin-top: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Toggle = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  position: relative;
  margin-right: 10px;
  text-decoration: none;
  color: ${({ isToggled }) =>
    isToggled ? "var(--main-color)" : "var(--secondary-color)"};

  &:after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    background-color: var(--main-color);
    border-radius: 50%;
    top: 28px;
    left: 22px;
    display: ${({ isToggled }) => (isToggled ? "block" : "none")};
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    text-indent: 2rem;
    border-radius: 5px;
    background: transparent;
    border: 1px solid var(--border);
    padding: 1rem 0;

    &::placeholder {
      color: var(--border);
    }
  }

  img {
    position: absolute;
    left: 10px;
  }
`;

const Block = styled.div`
  background: var(--white);
  width: 260px;
  height: 50px;
  border-radius: 10px;
`;

const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Span = styled.span`
  transition: 0.3s ease;
  cursor: pointer;
  background: ${({ isToggled2 }) =>
    isToggled2 ? "var(--main-color)" : "default"};
  padding: ${({ isToggled2 }) => (isToggled2 ? "6px 12px" : "0")};
  border-radius: ${({ isToggled2 }) => (isToggled2 ? "10px" : "0")};
  color: ${({ isToggled2 }) =>
    isToggled2 ? "var(--white)" : "var(--secondary-color)"};
`;

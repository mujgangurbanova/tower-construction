import styled from "styled-components";
import React, { useState, useEffect } from "react";
import search from "images/search-ground.png";
import axios from "axios";
import { cardData } from "redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function Card() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filter, setFilter] = useState("blokA");
  const cardsList = useSelector((state) => state.cardDataReducer.data);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);
  //*fetch card data...
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => dispatch(cardData(res.data)))
      .catch((err) => alert('Can not get card data',err));
  }, [dispatch]);
  //*funtion for filtering colors
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
        <FilterContainer className="buttonsContainer">
          <Toggle
            className="toggled-link"
            onClick={() => setSelected() || setCurrentFilter("all")}
            isToggled={currentFilter === "all"}
            toggledColor="var(--main-color)"
          >
            Hamısı
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() =>
              setSelected("Kredit") || setCurrentFilter("availableForCredit")
            }
            isToggled={currentFilter === "availableForCredit"}
            toggledColor="var(--orange)"
          >
            Kredit
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() =>
              setSelected("Ipoteka") || setCurrentFilter("availableForMortgage")
            }
            isToggled={currentFilter === "availableForMortgage"}
            toggledColor="var(--blue)"
          >
            İpoteka
          </Toggle>
          <Toggle
            className="toggled-link"
            onClick={() =>
              setSelected("Satılıb") || setCurrentFilter("availableForSold")
            }
            isToggled={currentFilter === "availableForSold"}
            toggledColor="var(--light-main)"
          >
            Satılıb
          </Toggle>
          <Input>
            <input type="text" placeholder="Mərtəbə axtar" />
            <img src={search} alt="search-ground" />
          </Input>
          <Block>
            <BlockContainer>
              <Span
                onClick={() => setFilter("blokA")}
                isToggled={filter === "blokA"}
              >
                Blok A
              </Span>
              <Span
                onClick={() => setFilter("blokB")}
                isToggled={filter === "blokB"}
              >
                Blok B
              </Span>
              <Span
                onClick={() => setFilter("blokC")}
                isToggled={filter === "blokC"}
              >
                Blok C
              </Span>
            </BlockContainer>
          </Block>
        </FilterContainer>
      </FilterWrapper>

      <CardWrapper>
        {cardsList.map((item, key) => (
          <CardContainer key={key}>
            <CardDetails>
              <CardTitle
                style={getColor(item.title)}
                className={
                  item.title === selected || selected === undefined
                    ? ""
                    : "card-id disabled"
                }
              >
                {item.id}
              </CardTitle>
              <span
                style={getPriorityColor(item.title)}
                className={
                  item.title === selected || selected === undefined
                    ? "home-current-status"
                    : "home-current-status disabled"
                }
              >
                {item.title}
              </span>
              <div
                className="room-size"
                style={{
                  display:
                    item.title === selected || selected === undefined
                      ? ""
                      : "none",
                }}
              >
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
  height: 17rem;
  border-radius: 1rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const CardDetails = styled.div`
  .home-current-status {
    font-weight: bold;
    display: block;
    margin: 1rem;
    font-size: 1.6rem;
  }

  .room-size {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    span {
      color: var(--secondary-color);
      font-size: 1.6rem;
    }
  }

  .home-detail {
    display: flex;
    justify-content: space-between;
    margin-top: 1.1rem;

    .room-number {
      color: var(--secondary-color);
    }

    .detailed {
      text-decoration: none;
      color: var(--main-color);
      font-size: 1.6rem;

    }
  }
`;

const CardTitle = styled.div`
  border-top-left-radius: 1rem;
  font-size: 1.6rem;
  padding: .8rem;
  border-top-right-radius: 1rem;
  color: var(--white);
`;
const FilterWrapper = styled.div`
  margin-top: 4rem;
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
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ isToggled, toggledColor }) =>
    isToggled ? toggledColor : "var(--secondary-color)"};
  font-weight: ${({ isToggled }) => (isToggled ? "bold" : "")};

  &:after {
    position: absolute;
    content: "";
    width: .6rem;
    height: .6rem;
    background-color: ${({ isToggled, toggledColor }) =>
      isToggled ? toggledColor : "var(--secondary-color)"};
    border-radius: 50%;
    top: 2.8rem;
    left: 2.2rem;
    display: ${({ isToggled }) => (isToggled ? "block" : "none")};
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    text-indent: 3.2rem;
    border-radius: .5rem;
    background: transparent;
    border: .1rem solid var(--border);
    padding: 1.6rem 0;

    &::placeholder {
      color: var(--border);
    }
  }

  img {
    position: absolute;
    left: 1rem;
  }
`;

const Block = styled.div`
  background: var(--white);
  width: 26rem;
  height: 5rem;
  border-radius: 1rem;
`;

const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Span = styled.button`
  transition: 0.3s all;
  cursor: pointer;
  border: none;
  background: ${({ isToggled }) =>
    isToggled ? "var(--main-color)" : "transparent"};
  padding: ${({ isToggled }) => (isToggled ? ".6rem 3rem" : "")};
  margin: ${({ isToggled }) => (isToggled ? "" : "0 2rem")};
  height: ${({ isToggled }) => (isToggled ? "5rem" : "")};
  border-radius: ${({ isToggled }) => (isToggled ? "1rem" : "0")};
  color: ${({ isToggled }) =>
    isToggled ? "var(--white)" : "var(--secondary-color)"};
`;

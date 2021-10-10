import React from "react";
import styled from "styled-components";
import search from "images/search-ground.png";
function Filter() {
  return (
    <FilterWrapper>
      <FilterContainer>
          <a href="">Hamısı</a>
          <a href="">Kredit</a>
          <a href="">İpoteka</a>
          <a href="">Satılıb</a>
        <Input>
          <input type="text" placeholder="Mərtəbə axtar" />
          <img src={search} alt="search-ground" />
        </Input>
        <Block>
          <div className="block">
            <span>Block A</span>
            <span>Block B</span>
            <span>Block C</span>
          </div>
        </Block>
      </FilterContainer>
    </FilterWrapper>
  );
}

export default Filter;

const FilterWrapper = styled.div`
margin-top: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration:none;
    color: var(--secondary-color);
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

  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    span {
        transition: .3s ease;
      &:nth-child(1) {
        background: var(--main-color);
        padding: 6px 12px;
        border-radius: 10px;
        color: white;
      }
    }
  }
`;

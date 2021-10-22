// import React, { useState } from "react";
// import styled from "styled-components";
// import search from "images/search-ground.png";
// function Filter() {
//   const [isToggled, setIsToggled] = useState(0);
//   const [isToggled2, setIsToggled2] = useState(0);
//   const toggled = (which) => setIsToggled(which);
//   const toggled2 = (which2) => setIsToggled2(which2);

//   return (
//     <FilterWrapper>
//       <FilterContainer>
//         <Toggle
//           className="toggled-link"
//           onClick={() => toggled(0)}
//           isToggled={isToggled === 0}
//           href="#!"
//         >
//           Hamısı
//         </Toggle>
//         <Toggle
//           className="toggled-link"
//           onClick={() => toggled(1)}
//           isToggled={isToggled === 1}
//           href="#!"
//         >
//           Kredit
//         </Toggle>
//         <Toggle
//           className="toggled-link"
//           onClick={() => toggled(2)}
//           isToggled={isToggled === 2}
//           href="#!"
//         >
//           İpoteka
//         </Toggle>
//         <Toggle
//           className="toggled-link"
//           onClick={() => toggled(3)}
//           isToggled={isToggled === 3}
//           href="#!"
//         >
//           Satılıb
//         </Toggle>
//         <Input>
//           <input type="text" placeholder="Mərtəbə axtar" />
//           <img src={search} alt="search-ground" />
//         </Input>
//         <Block>
//           <BlockContainer>
//             <Span onClick={() => toggled2(0)} isToggled2={isToggled2 === 0}>
//               Blok A
//             </Span>
//             <Span onClick={() => toggled2(1)} isToggled2={isToggled2 === 1}>
//               Blok B
//             </Span>
//             <Span onClick={() => toggled2(2)} isToggled2={isToggled2 === 2}>
//               Blok C
//             </Span>
//           </BlockContainer>
//         </Block>
//       </FilterContainer>
//     </FilterWrapper>
//   );
// }

// export default Filter;

// const FilterWrapper = styled.div`
//   margin-top: 40px;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const Toggle = styled.a`
//   position: relative;
//   margin-right: 10px;
//   text-decoration: none;
//   color: ${({ isToggled }) =>
//     isToggled ? "var(--main-color)" : "var(--secondary-color)"};

//   &:after {
//     position: absolute;
//     content: "";
//     width: 6px;
//     height: 6px;
//     background-color: var(--main-color);
//     border-radius: 50%;
//     top: 28px;
//     left: 22px;
//     display: ${({ isToggled }) => (isToggled ? "block" : "none")};
//   }
// `;

// const Input = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;

//   input {
//     text-indent: 2rem;
//     border-radius: 5px;
//     background: transparent;
//     border: 1px solid var(--border);
//     padding: 1rem 0;

//     &::placeholder {
//       color: var(--border);
//     }
//   }

//   img {
//     position: absolute;
//     left: 10px;
//   }
// `;

// const Block = styled.div`
//   background: var(--white);
//   width: 260px;
//   height: 50px;
//   border-radius: 10px;

  
// `;

// const BlockContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px 20px;

  
// `;

// const Span = styled.span`
//  transition: 0.3s ease;
//     cursor: pointer;
//     background: ${({ isToggled2 }) =>
//       isToggled2 ? "var(--main-color)" : "default"};
//     padding: ${({ isToggled2 }) => (isToggled2 ? "6px 12px" : "0")};
//     border-radius: ${({ isToggled2 }) => (isToggled2 ? "10px" : "0")};
//     color: ${({ isToggled2 }) =>
//       isToggled2 ? "var(--white)" : "var(--secondary-color)"};

// `
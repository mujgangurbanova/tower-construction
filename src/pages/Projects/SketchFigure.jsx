import React from "react";
import styled from "styled-components";
import sketch from "images/sketch.png";
import Icon from "images/zoom-icon.png"

function SketchFigure() {
  return (
    <SketchWrapper>
      <SketchImg src={sketch} alt="sketch" />
      <ZoomBtn>
          <img className="zoom-icon" src={Icon} alt="zoom-icon" />
          Planı böyüt</ZoomBtn>
    </SketchWrapper>
  );
}

export default SketchFigure;



const SketchImg = styled.img`
cursor: zoom-in;
`;

const ZoomBtn = styled.button`
  padding: 10px 30px;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color:var(--white);
  display:inline-block;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: zoom-in;


  .zoom-icon{
      float: left;
      margin-right: 10px;
  }
`;

const SketchWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
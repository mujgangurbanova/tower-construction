import React, { useState } from "react";
import styled from "styled-components";
import sketch from "images/sketch.png";
import Icon from "images/zoom-icon.png";

function SketchFigure() {
  const [zoomIn, setZoomIn] = useState(false);
//* zoom sketch image
  function enlarge() {
    if (zoomIn) {
      setZoomIn(false);
    } else {
      setZoomIn(true);
    }
  }

  function resetImg() {
    setZoomIn(null)
  }

  return (
    <SketchWrapper>
      <SketchImage src={sketch}  zoomIn={zoomIn} onClick={resetImg} alt="sketch" />
      <ZoomBtn onClick={enlarge} >
        <img className="zoom-icon" src={Icon} alt="zoom-icon" />
        Planı böyüt
      </ZoomBtn>
    </SketchWrapper>
  );
}

export default SketchFigure;

const SketchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;
const SketchImage = styled.img`
  cursor: zoom-out;
  transition: ${({ zoomIn }) => zoomIn ? ".3s ease" : "1s"};
  transform: ${({ zoomIn }) =>zoomIn ? "scale(1.5)" : ""};

  
`;

const ZoomBtn = styled.button`
cursor: pointer;
  padding: 10px 30px;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: var(--white);
  display: inline-block;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 1rem;

  .zoom-icon {
    float: left;
    margin-right: 10px;
  }
`;

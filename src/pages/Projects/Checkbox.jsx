import React from "react";
import styled from "styled-components";

function Checkbox({save}) {
  return (
    <div className="checkbox">
      <Checked>
        <label className="check-label">
          İlkin ödəniş olunub
          <input type="checkbox"  />
          <span className="checkmark"></span>
        </label>
      </Checked>
      <button onClick={save} className="add-customers">Alıcını əlavə et</button>
    </div>
  );
}

export default Checkbox;
const Checked = styled.div`
  flex: 8;

  label {
    color: var(--secondary-color);
    margin-top: 15px;
  }

  
`;

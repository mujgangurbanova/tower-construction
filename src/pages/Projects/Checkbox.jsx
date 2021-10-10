import React from "react";
import styled from "styled-components";

function Checkbox() {
  return (
    <div className="checkbox">
      <Checked>
        <label class="check-label">
          İlkin ödəniş olunub
          <input type="checkbox"  />
          <span class="checkmark"></span>
        </label>
      </Checked>
      <button className="add-customers">Alıcını əlavə et</button>
    </div>
  );
}

export default Checkbox;
const Checked = styled.div`
  flex: 5;

  label {
    color: var(--secondary-color);
    margin-top: 15px;
  }
`;

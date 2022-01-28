import { AREA_CHART_DATA, AREA_SELECTION } from "redux/actionTypes";

const initialState = {
  data: [],
  selection: "",
};

const areaChartDataReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AREA_CHART_DATA:
      return {
        ...state,
        data: action.data,
      };
    case AREA_SELECTION:
      return { ...state, selection: payload };
    default:
      return state;
  }
};

export default areaChartDataReducer;

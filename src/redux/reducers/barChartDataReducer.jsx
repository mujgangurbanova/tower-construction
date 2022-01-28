import { BAR_CHART_DATA } from "redux/actionTypes";

const initialState = {
  data: [],
};

const barChartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAR_CHART_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default barChartDataReducer;

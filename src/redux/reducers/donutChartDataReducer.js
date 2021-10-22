import { DONUT_CHART_DATA } from "redux/actionTypes";


const initialState = {
    data: [],
  };
  
  const donutChartDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case DONUT_CHART_DATA:
        return {
          ...state,
          data: action.data,
        };
      default:
        return state;
    }
  };

  export default donutChartDataReducer;
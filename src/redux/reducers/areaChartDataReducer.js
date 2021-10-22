import { AREA_CHART_DATA } from "redux/actionTypes";


const initialState = {
    data: [],
  };
  
  const areaChartDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case AREA_CHART_DATA:
        return {
          ...state,
          data: action.data,
        };
      default:
        return state;
    }
  };

  export default areaChartDataReducer;
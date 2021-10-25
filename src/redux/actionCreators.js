import { AREA_CHART_DATA, CARD_DATA, DONUT_CHART_DATA, BAR_CHART_DATA, AREA_SELECTION } from "./actionTypes";

export const cardData = (data) => {
  return { type: CARD_DATA, data };
};

export const areaChartData = (data) => {
  return { type: AREA_CHART_DATA, data };
};
export const donutChartData = (data) => {
  return { type: DONUT_CHART_DATA, data };
};
export const barChartData = (data) => {
  return { type: BAR_CHART_DATA, data };
};

export const areaSelection = payload => {
  return { type: AREA_SELECTION, payload }
}
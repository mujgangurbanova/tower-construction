import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import cardDataReducer from "./reducers/cardDataReducer";
import areaChartDataReducer from "./reducers/areaChartDataReducer";
import donutChartDataReducer from "./reducers/donutChartDataReducer";
import barChartDataReducer from "./reducers/barChartDataReducer";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  cardDataReducer,
  areaChartDataReducer,
  donutChartDataReducer,
  barChartDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(logger))
  );
} else {
  store = createStore(persistedReducer);
}

let persistor = persistStore(store);

export { store, persistor };

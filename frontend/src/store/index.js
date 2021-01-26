import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./reducers/session";
import userInfoReducer from "./reducers/userInfo";
import categoryReducer from "./reducers/categories";

const rootReducer = combineReducers({
  session: sessionReducer,
  userInfo: userInfoReducer,
  categories: categoryReducer,
});

const envSelection = () => {
  if (process.env.NODE_ENV === "production") {
    const productionEnhancer = applyMiddleware(thunk);
    return productionEnhancer;
  } else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const devEnhancer = composeEnhancers(applyMiddleware(thunk, logger));
    return devEnhancer;
  }
};

const enhancer = envSelection();

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

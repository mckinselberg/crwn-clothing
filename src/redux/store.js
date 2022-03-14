import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middleWares));
// Redux Dev Tools: 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleWares)));

export default store;
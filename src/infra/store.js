import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { rootEpic, rootReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const loggerMiddleware = createLogger();

  const middleware = [epicMiddleware, loggerMiddleware];

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}

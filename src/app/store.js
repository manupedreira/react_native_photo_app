import { createStore, applyMiddleware } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import createSagaMiddleware from "redux-saga";
import AppReducer from "./AppReducer";
import AppSagas from "./AppSagas";

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    AppReducer,
    applyMiddleware(navMiddleware, sagaMiddleware)
  );
  sagaMiddleware.run(AppSagas);
  return store;
}

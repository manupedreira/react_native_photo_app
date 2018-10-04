import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

let store = configureStore();

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store} />
      </Provider>
    );
  }
}

export default AppRoot;

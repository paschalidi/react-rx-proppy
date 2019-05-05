import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ProppyProvider } from "proppy-react";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./infra/store";

const providers = { store: configureStore() };

ReactDOM.render(
  <ProppyProvider providers={providers}>
    <App property="i am a property" />
  </ProppyProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

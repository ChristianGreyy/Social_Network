import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./services/icofont/icofont.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import authContext from "./contexts/authContext";
import { token } from "./contexts/authContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <authContext.Provider value={token}>
        <App />
      </authContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
// import * as ReactDOMClient from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./services/icofont/icofont.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import authContext from "./contexts/authContext";
import { token } from "./contexts/authContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <authContext.Provider value={token}>
        <App />
      </authContext.Provider>
    </Provider>
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <authContext.Provider value={token}>
//         <App />
//       </authContext.Provider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

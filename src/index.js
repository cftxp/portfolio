import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
// import * as serviceWorker from "./serviceWorker";

// The main application component:
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.querySelector("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();

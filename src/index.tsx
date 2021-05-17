import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // 全局css
import App from "./App";
// 全局状态
import { Provider } from "react-redux";
import store from "./store";
import { loadServer, DevTools } from "jira-dev-tool";
// antd css
import "antd/dist/antd.less";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <DevTools />
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

import React from "react";
// 리덕스의 스토어 작성
// 미들웨어 추가를 위한 applyMiddleware
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// 리덕스 값을 확인하기 위한 dev툴 - 크롬확장앱도 설치해야 함
//import { composeWithDevTools } from "redux-devtools-extension";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
//import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 * @Description: 入口文件
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-13 12:49:31
 */
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

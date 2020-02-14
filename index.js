import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import DataFetchingOne from "./components/DataFetchingOne";

import IntervaleCounter from "./components/IntervalCounter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value="User Name">
        <ChannelContext.Provider value="ch1">
        <DataFetchingOne />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

render(<App />, document.getElementById("root"));

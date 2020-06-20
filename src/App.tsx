import * as React from "react";

import "./styles/style.css";
import "./styles/left-menu.css";
import "./styles/center.css";

import LeftMenu from "./components/leftMenu/LeftMenu";
import TopNav from "./components/topNav/TopNav";
import Center from "./components/center/Center";

const App: React.FunctionComponent = () => (
  <div className="App">
    <TopNav />
    <div className="app-container">
      <LeftMenu />
      <Center />
    </div>
  </div>
);

export default App;

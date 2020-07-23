import * as React from "react";

import "./styles/style.css";
import "./styles/menu.css";
import "./styles/center.css";
import "./styles/nav.css";

import LeftMenu from "./containers/Menu";
import Nav from "./components/Nav";
import Center from "./containers/Center";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <LeftMenu />
      <div className="app-container">
        <Nav />
        <Center />
      </div>
    </div>
  );
};

export default App;

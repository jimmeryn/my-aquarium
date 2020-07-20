import * as React from "react";

import "./styles/style.css";
import "./styles/left-menu.css";
import "./styles/center.css";
import "./styles/top-nav.css";

import LeftMenu from "./components/leftMenu/LeftMenu";
import TopNav from "./components/topNav/TopNav";
import Center from "./components/center/Center";

const App: React.FunctionComponent = () => {
  const [isLandingPageOpen, changeLandingPageState] = React.useState(true);
  return (
    <div className="App">
      <LeftMenu isLandingPageOpen={isLandingPageOpen} />
      <div className="app-container">
        <TopNav />
        <Center isLandingPageOpen={isLandingPageOpen} />
      </div>
    </div>
  );
};

export default App;

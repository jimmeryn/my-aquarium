import * as React from "react";

import "./styles/style.css";
import "./styles/left-menu.css";
import "./styles/center.css";
import "./styles/top-nav.css";

import LeftMenu from "./components/leftMenu/LeftMenu";
import TopNav from "./components/topNav/TopNav";
import Center from "./components/center/Center";
import { useSelector } from "react-redux";
import { State } from "./store";

const App: React.FunctionComponent = () => {
  const { visibleAquarium, allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => ({
      visibleAquarium: state.visibleAquarium,
      allaquariumsIds: state.aquariums.allaquariumsIds,
      aquariumsById: state.aquariums.aquariumsById
    })
  );

  return (
    <div className="App">
      <LeftMenu
        visibleAquarium={visibleAquarium}
        allaquariumsIds={allaquariumsIds}
        aquariumsById={aquariumsById}
      />
      <div className="app-container">
        <TopNav />
        <Center visibleAquarium={visibleAquarium} />
      </div>
    </div>
  );
};

export default App;

import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "src/store";
import RenderParamButtons from "../components/ParamButtonsList";
import AppBar from "@material-ui/core/AppBar";

const ParamButtonList: React.FunctionComponent = () => {
  const { aquariumsById, visibleAquarium } = useSelector((state: State) => ({
    aquariumsById: state.aquariums.aquariumsById,
    visibleAquarium: state.visibleAquarium
  }));

  return (
    <div className="param-button-list">
      <AppBar position="static" color="default">
        <RenderParamButtons
          paramNames={[
            "refills",
            ...new Set(aquariumsById[visibleAquarium].params.map(e => e.name))
          ]}
        />
      </AppBar>
    </div>
  );
};

export default ParamButtonList;

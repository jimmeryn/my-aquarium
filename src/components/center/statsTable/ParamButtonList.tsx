import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../store";
import RenderParamButtons from "./RenderParamButtons";
import AppBar from "@material-ui/core/AppBar";

const ParamButtonList: React.FunctionComponent = () => {
  const { aquariumsById } = useSelector((state: State) => state.aquariums);
  return (
    <div className="param-button-list">
      <AppBar position="static" color="default">
        <RenderParamButtons
          // TODO: check whith aquarium to check from redux state (filter)
          paramNames={[
            "refills",
            ...new Set(aquariumsById[0].params.map(e => e.name))
          ]}
        />
      </AppBar>
    </div>
  );
};

export default ParamButtonList;

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import GraphModifyButton from "../components/GraphModifButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { GraphActionTypes, ADD_GRAPH_DATA, SHOW_ON_GRAPH } from "../actions";
import { State } from "../store";

const GraphModifiButtonsList: React.FunctionComponent = () => {
  const { paramFilter } = useSelector((state: State) => state);

  const dispatch = useDispatch<React.Dispatch<GraphActionTypes>>();
  const graphDispatch = (
    type: typeof ADD_GRAPH_DATA | typeof SHOW_ON_GRAPH
  ) => () => dispatch({ type, label: paramFilter });

  return (
    <div className="graph-modify-list">
      <BottomNavigation value={10}>
        <GraphModifyButton
          label={"Show"}
          onClick={graphDispatch(SHOW_ON_GRAPH)}
        />
        <GraphModifyButton
          label={"Add"}
          onClick={graphDispatch(ADD_GRAPH_DATA)}
        />
      </BottomNavigation>
    </div>
  );
};

export default GraphModifiButtonsList;

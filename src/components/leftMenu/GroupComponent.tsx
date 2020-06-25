import * as React from "react";
import { connect } from "react-redux";
import {} from "../../store/data/actions";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Aquarium, NormalizedObject } from "../../store/data/types";

import RenderGroupComponent from "./RenderGroupComponent";

import { useSelector } from "react-redux";
import { State } from "../../store";

interface IGroupProps {
  // TODO: Change this - currently i dont know how to get CombinedState Type
  aquariums: any;
}

export default class GroupComponent extends React.Component<IGroupProps> {
  constructor(props: IGroupProps) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.aquariums.allAquariumsIds.map((groupId: number) => (
          <ExpansionPanel key={groupId}>
            <ExpansionPanelSummary>
              <Typography variant="h6" noWrap>
                {`Aquarium ${groupId}`}
              </Typography>
            </ExpansionPanelSummary>
            {this.props.aquariums.allAquariumsIds.map((aquariumIndex: number) =>
              RenderGroupComponent(aquariumIndex)
            )}
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

import * as React from "react";
import GroupComponent from "./GroupComponent";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ListSubheader } from "@material-ui/core";

const GroupComponentList: React.FunctionComponent = () => (
  <div>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <ListSubheader>
          <h2 className="group-list-title">Aquarium 1</h2>
        </ListSubheader>
      </ExpansionPanelSummary>
      <GroupComponent />
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <ListSubheader>
          <h2 className="group-list-title">Aquarium 2</h2>
        </ListSubheader>
      </ExpansionPanelSummary>
      <GroupComponent />
    </ExpansionPanel>
  </div>
);

export default GroupComponentList;

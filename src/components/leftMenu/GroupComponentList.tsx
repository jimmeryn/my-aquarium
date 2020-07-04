import * as React from "react";
import GroupComponent from "./GroupComponent";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ListSubheader } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#e0e0e0"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

const GroupComponentList: React.FunctionComponent = () => (
  <div>
    <ExpansionPanel className={useStyles().root}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <ListSubheader>
          <div className="group-list-title">Aquarium 1</div>
        </ListSubheader>
      </ExpansionPanelSummary>
      <GroupComponent />
    </ExpansionPanel>
    <ExpansionPanel className={useStyles().root}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <ListSubheader>
          <div className="group-list-title">Aquarium 2</div>
        </ListSubheader>
      </ExpansionPanelSummary>
      <GroupComponent />
    </ExpansionPanel>
  </div>
);

export default GroupComponentList;

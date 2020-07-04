import * as React from "react";
import { useSelector } from "react-redux";
import GroupComponent from "./GroupComponent";
import { State } from "../../store";

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

const GroupComponentList: React.FunctionComponent = () => {
  const { aquariums } = useSelector((state: State) => state);
  return (
    <div>
      {aquariums.allaquariumsIds.map(aquariumId => (
        <ExpansionPanel className={useStyles().root} key={aquariumId}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ListSubheader>
              <div className="group-list-title">{`Aquarium ${aquariumId +
                1}`}</div>
            </ListSubheader>
          </ExpansionPanelSummary>
          <GroupComponent aquarium={aquariums.aquariumsById[aquariumId]} />
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default GroupComponentList;

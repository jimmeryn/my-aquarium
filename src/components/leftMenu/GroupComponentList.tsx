import * as React from "react";
import { useSelector } from "react-redux";
import GroupComponent from "./GroupComponent";
import { State } from "../../store";

import { Accordion, AccordionSummary, ListSubheader } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getLatestParams, getLatestRefill } from "./helperFunctions";

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
  const { allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => state.aquariums
  );

  return (
    <div>
      {allaquariumsIds.map((aquariumId, index) => (
        <Accordion className={useStyles().root} key={aquariumId}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListSubheader>
              <div className="group-list-title">{`Aquarium ${
                aquariumId + 1
              }`}</div>
            </ListSubheader>
          </AccordionSummary>
          <GroupComponent
            params={getLatestParams(aquariumsById[aquariumId].params)}
            refill={getLatestRefill(aquariumsById[aquariumId].refills)}
            index={index}
          />
        </Accordion>
      ))}
    </div>
  );
};

export default GroupComponentList;

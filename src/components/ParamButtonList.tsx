import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Aquarium } from "src/models";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      minWidth: 100,
      width: 100
    }
  })
);

const ParamButtonList: React.FunctionComponent<{
  aquariumsById: {
    [id: number]: Aquarium;
  };
  visibleAquarium: number;
  onClick: (filter: string) => void;
}> = ({ aquariumsById, visibleAquarium, onClick }) => {
  // TODO: change from 0 to number of current filter,
  //       or in redux state chnage to default value
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="param-button-list">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="parameters tabs"
        >
          {[
            "refills",
            ...new Set(aquariumsById[visibleAquarium].params.map(e => e.name))
          ].map((paramName, i) => (
            <Tab
              className={useStyles().tab}
              label={paramName}
              key={i}
              onClick={e => {
                e.preventDefault();
                if (onClick) onClick(paramName);
              }}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default ParamButtonList;

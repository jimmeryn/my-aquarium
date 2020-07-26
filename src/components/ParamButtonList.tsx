import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Aquarium } from "src/models";

const ParamButtonList: React.FunctionComponent<{
  aquariumsById: {
    [id: number]: Aquarium;
  };
  visibleAquarium: number;
  filter: string;
  onClick: (filter: string) => void;
}> = ({ aquariumsById, visibleAquarium, onClick, filter }) => {
  const initValue: { [key: string]: number } = { refills: 0 };
  const [value, setValue] = React.useState(
    [...new Set(aquariumsById[visibleAquarium].params.map(e => e.name))].reduce(
      (acc, cur, i) => {
        acc[cur] = i + 1;
        return acc;
      },
      initValue
    )[`${filter}`]
  );

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

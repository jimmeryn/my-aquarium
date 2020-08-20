import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Param } from "src/models";

const ParamButtonList: React.FunctionComponent<{
  params: Param[];
  filter: string;
  onClick: (filter: string) => void;
}> = ({ params, onClick, filter }) => {
  const initValue: { [key: string]: number } = {};
  const paramNames = [
    ...new Set(["refills", ...params.map(param => param.name)])
  ];
  const [value, setValue] = React.useState(
    paramNames.reduce((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, initValue)[`${filter}`]
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
          {paramNames.map((paramName, i) => (
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

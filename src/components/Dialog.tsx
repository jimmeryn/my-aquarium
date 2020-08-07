import * as React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { CssBaseline, InputAdornment, TextField } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Divider from "./Divider";
import GroupButton from "./GroupButton";
import CloseButton from "./CloseButton";

const classNames = require("classnames");

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const Dialog: React.FunctionComponent<{
  isDialogOpen: boolean;
  title: string;
  unit: string;
}> = ({ isDialogOpen, title, unit }) => {
  const dialogClass = classNames({
    dialog: isDialogOpen,
    "dialog--hidden": !isDialogOpen
  });
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={dialogClass}>
      <div className="dialog-title-wrappper">
        <CloseButton />
        <div className="dialog-title">{title}</div>
        <Divider />
      </div>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TextField
          label="Value"
          id="standard-start-adornment"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
            )
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      <GroupButton
        className={"dialog-button"}
        typography={"group-list-title"}
        onClick={() => {
          console.log("clicked");
        }}
        name="Submit"
      />
    </div>
  );
};

export default Dialog;

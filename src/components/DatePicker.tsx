import * as React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const DatePicker: React.FunctionComponent<{
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  label?: string;
}> = ({ selectedDate, setSelectedDate, label }) => {
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={label ? label : "Date"}
          value={selectedDate}
          onChange={handleDateChange}
          autoOk={true}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default DatePicker;

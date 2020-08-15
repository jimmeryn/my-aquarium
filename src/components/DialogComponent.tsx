import * as React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Divider from "./Divider";
import GroupButton from "./GroupButton";
import CloseButton from "./CloseButton";
import DatePicker from "./DatePicker";
import ParamTableInput from "./ParamTableInput";
import TextInput from "./TextInput";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const DialogComponent: React.FunctionComponent<{
  title: string;
  onClose: any;
  label?: string;
  unit?: string;
  table?: boolean;
  selectedDate?: Date;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date>>;
  dateLabel?: string;
}> = ({
  title,
  onClose,
  label,
  unit,
  table,
  selectedDate,
  setSelectedDate,
  dateLabel
}) => {
  return (
    <div className="dialog">
      <div className="dialog-title-wrappper">
        <CloseButton onClick={onClose} />
        <div className="dialog-title">{title}</div>
        <Divider />
      </div>
      <ThemeProvider theme={darkTheme}>
        {label ? <TextInput label={label} unit={unit} /> : null}
        {table ? <ParamTableInput /> : null}
        {selectedDate && setSelectedDate ? (
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            label={dateLabel}
          />
        ) : null}
      </ThemeProvider>
      <GroupButton
        className={"dialog-button"}
        typography={"group-list-title"}
        onClick={() => {
          onClose();
        }}
        name="Submit"
      />
    </div>
  );
};

export default DialogComponent;

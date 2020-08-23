import * as React from "react";

import Divider from "./Divider";
import GroupButton from "./GroupButton";
import CloseButton from "./CloseButton";
import DatePicker from "./DatePicker";

const DialogComponent: React.FunctionComponent<{
  title: string;
  selectedDate: Date;
  dateLabel?: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  handleSubmit: () => void;
  handleDialogClose: () => void;
}> = ({
  title,
  selectedDate,
  dateLabel,
  setSelectedDate,
  handleSubmit,
  handleDialogClose,
  children,
}) => (
  <div className="dialog">
    <div className="dialog-title-wrappper">
      <CloseButton handleClick={handleDialogClose} />
      <div className="dialog-title">{title}</div>
      <Divider />
    </div>
    {children}
    <DatePicker
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      label={dateLabel ? dateLabel : null}
    />
    <GroupButton
      className={"dialog-button"}
      typography={"group-list-title"}
      handleButtonClick={() => {
        handleDialogClose();
        handleSubmit();
      }}
      name="Submit"
    />
  </div>
);

export default DialogComponent;

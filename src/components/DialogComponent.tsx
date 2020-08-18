import * as React from "react";

import Divider from "./Divider";
import GroupButton from "./GroupButton";
import CloseButton from "./CloseButton";
import DatePicker from "./DatePicker";
import DialogParamTable from "./DialogParamTable";
import TextInput from "./TextInput";
import { DialogVariant } from "src/actions";

const DialogComponent: React.FunctionComponent<{
  title: string;
  onClose: (variant?: DialogVariant) => void;
  label?: string;
  unit?: string;
  paramNames?: string[];
  selectedDate?: Date;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date>>;
  dateLabel?: string;
  handleSubmit: (textFieldValue: number) => void;
}> = ({
  title,
  onClose,
  label,
  unit,
  paramNames,
  selectedDate,
  setSelectedDate,
  dateLabel,
  handleSubmit
}) => {
  const [inputValue, handleInputChange] = React.useState(10);

  return (
    <div className="dialog">
      <div className="dialog-title-wrappper">
        <CloseButton handleClick={onClose} />
        <div className="dialog-title">{title}</div>
        <Divider />
      </div>
      {label ? (
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          label={label}
          unit={unit}
        />
      ) : null}
      {paramNames ? <DialogParamTable paramNames={paramNames} /> : null}
      {selectedDate && setSelectedDate ? (
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          label={dateLabel}
        />
      ) : null}
      <GroupButton
        className={"dialog-button"}
        typography={"group-list-title"}
        handleButtonClick={() => {
          onClose();
          handleSubmit(inputValue);
        }}
        name="Submit"
      />
    </div>
  );
};

export default DialogComponent;

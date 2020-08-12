import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";

const Dialog: React.FunctionComponent<{
  title: string;
  unit: string;
}> = ({ title, unit }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const { dialogState } = useSelector((state: State) => ({
    dialogState: state.userInterface.dialog
  }));

  const dispatchMenu = useDispatch<React.Dispatch<UIActionTypes>>();
  const setDialogStateDispatch = () => dispatchMenu({ type: SET_DIALOG_STATE });

  return (
    <DialogComponent
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      isDialogOpen={dialogState}
      title={title}
      unit={unit}
      onClose={setDialogStateDispatch}
    />
  );
};

export default Dialog;

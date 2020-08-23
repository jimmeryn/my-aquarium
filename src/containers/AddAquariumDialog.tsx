import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import { DialogVariant, HIDDEN, ActionTypes, ADD_AQUARIUM } from "../actions";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";
import { State } from "../store";
import TextInput from "../components/TextInput";

const AddAquariumDialog: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [inputValue, setInputValue] = React.useState(0);

  const { nextAquariumId, dialogState } = useSelector((state: State) => ({
    nextAquariumId: state.aquariums.allIds.length,
    dialogState: state.userInterface.dialog,
  }));

  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();
  const setDialogState = (variant?: DialogVariant, aquariumId = -1) =>
    dispatch({ type: SET_DIALOG_STATE, variant, aquariumId });

  const addAquariumDispatch = (aquariumId: number, size: number) =>
    dispatch({
      type: ADD_AQUARIUM,
      id: aquariumId,
      payload: {
        size,
      },
    });

  const handleMouseClick = (event: MouseEvent) => {
    const popover = document.getElementsByClassName("MuiPopover-root")[0];
    if (
      dialogState.variant !== HIDDEN &&
      !popover &&
      !document
        .getElementsByClassName("dialog")[0]
        .contains(event.target as Node)
    ) {
      setDialogState();
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseClick);
    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [handleMouseClick]);

  return (
    <DialogComponent
      title={"Aquarium"}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      handleSubmit={() => addAquariumDispatch(nextAquariumId, inputValue)}
      handleDialogClose={() => setDialogState(HIDDEN)}
      dateLabel={"Start Date"}
    >
      <TextInput
        value={inputValue}
        handleInputChange={setInputValue}
        label={"Size"}
        unit={"l"}
      />
    </DialogComponent>
  );
};

export default AddAquariumDialog;

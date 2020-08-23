import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  DialogVariant,
  HIDDEN,
  ActionTypes,
  ADD_AQUARIUM_DATA,
} from "../actions";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";
import { State } from "../store";
import InputField from "../components/InputField";

const AddRefillDialog: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [inputValue, setInputValue] = React.useState(10);

  const { dialogState, allParamsIds } = useSelector((state: State) => ({
    dialogState: state.userInterface.dialog,
    allParamsIds: state.params.allIds,
  }));

  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();
  const setDialogState = (variant?: DialogVariant, aquariumId = -1) =>
    dispatch({ type: SET_DIALOG_STATE, variant, aquariumId });

  const addAquariumDataDispatch = (
    aquariumId: number,
    value: number,
    date: Date,
    paramId: number
  ) =>
    dispatch({
      type: ADD_AQUARIUM_DATA,
      id: aquariumId,
      payload: {
        paramId,
        name: "refills",
        value,
        date,
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
      title={"Water Refill"}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      handleSubmit={() =>
        addAquariumDataDispatch(
          dialogState.aquariumId,
          inputValue,
          selectedDate,
          allParamsIds.length
        )
      }
      handleDialogClose={() => setDialogState(HIDDEN)}
    >
      <InputField
        value={inputValue}
        handleInputChange={setInputValue}
        label={"Refill Value"}
        unit={"l"}
      />
    </DialogComponent>
  );
};

export default AddRefillDialog;

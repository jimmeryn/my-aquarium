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
import DialogParamTable from "../components/DialogParamTable";
import { defaultParams } from "../models";

const AddParamsDialog: React.FunctionComponent = () => {
  const { dialogState, params } = useSelector((state: State) => ({
    dialogState: state.userInterface.dialog,
    params: state.params.allIds.map(id => state.params.byId[id]),
  }));

  const paramNames = [
    ...new Set([
      ...(params.length > 0
        ? params
            .map(param => param.name)
            .filter(paramName => paramName !== "refills")
        : Object.keys(defaultParams)),
    ]),
  ];

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [inputValues, setInputValues] = React.useState<number[]>(
    new Array(paramNames.length).fill(0)
  );

  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();
  const setDialogState = (variant?: DialogVariant, aquariumId = -1) =>
    dispatch({ type: SET_DIALOG_STATE, variant, aquariumId });

  const addAquariumDataDispatch = (
    aquariumId: number,
    value: number,
    date: Date,
    name: string,
    paramId: number
  ) =>
    dispatch({
      type: ADD_AQUARIUM_DATA,
      id: aquariumId,
      payload: {
        paramId,
        name,
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
      title={"Parameters"}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      handleSubmit={() =>
        inputValues.forEach((inputValue, i) => {
          addAquariumDataDispatch(
            dialogState.aquariumId,
            inputValue,
            selectedDate,
            paramNames[i],
            params.length + i
          );
        })
      }
      handleDialogClose={() => setDialogState(HIDDEN)}
    >
      <DialogParamTable
        paramNames={paramNames}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </DialogComponent>
  );
};

export default AddParamsDialog;

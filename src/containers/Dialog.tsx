import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  DialogVariant,
  REFILL,
  PARAMS,
  AQUARIUM,
  HIDDEN,
  ADD_AQUARIUM,
  ActionTypes
} from "../actions";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";
import { State } from "../store";

const Dialog: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const { allaquariumsIds, dialogState, aquariumsById } = useSelector(
    (state: State) => ({
      allaquariumsIds: state.aquariums.allaquariumsIds,
      dialogState: state.userInterface.dialog,
      aquariumsById: state.aquariums.aquariumsById
    })
  );

  const paramList = [...new Set([...aquariumsById[0].params.map(e => e.name)])];

  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();
  const setDialogState = (variant?: DialogVariant) =>
    dispatch({ type: SET_DIALOG_STATE, variant });

  const addAquariumDispatch = (size: number) =>
    dispatch({
      type: ADD_AQUARIUM,
      id: allaquariumsIds[allaquariumsIds.length - 1] + 1,
      payload: {
        size
      }
    });

  const handleMouseClick = (event: MouseEvent) => {
    const popover = document.getElementsByClassName("MuiPopover-root")[0];
    if (
      dialogState !== HIDDEN &&
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

  const dialogData = {
    title: "",
    label: "",
    unit: "",
    paramNames: null,
    dateLabel: "",
    handleSubmit: (_: any) => {}
  };

  switch (dialogState) {
    case PARAMS:
      dialogData.title = "Parameters";
      dialogData.paramNames = paramList;
      break;
    case REFILL:
      dialogData.title = "Water Refill";
      dialogData.label = "Value";
      dialogData.unit = "l";
      break;
    case AQUARIUM:
      dialogData.title = "Aquarium";
      dialogData.label = "Aquarium Size";
      dialogData.unit = "l";
      dialogData.dateLabel = "Start Date";
      dialogData.handleSubmit = addAquariumDispatch;
      break;
    default:
      break;
  }

  return dialogState !== HIDDEN ? (
    <DialogComponent
      title={dialogData.title}
      label={dialogData.label}
      unit={dialogData.unit}
      paramNames={dialogData.paramNames}
      dateLabel={dialogData.dateLabel}
      selectedDate={selectedDate}
      onClose={() => setDialogState(HIDDEN)}
      handleSubmit={dialogData.handleSubmit}
      setSelectedDate={setSelectedDate}
    />
  ) : null;
};

export default Dialog;

import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import { DialogVariant, REFILL, PARAMS, AQUARIUM, HIDDEN } from "../actions";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";
import { State } from "../store";

const Dialog: React.FunctionComponent<{
  variant: DialogVariant;
}> = ({ variant }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const dispatch = useDispatch<React.Dispatch<UIActionTypes>>();
  const setDialogState = (variant: DialogVariant) =>
    dispatch({ type: SET_DIALOG_STATE, variant });

  const { aquariumsById } = useSelector((state: State) => state.aquariums);
  const paramList = [...new Set([...aquariumsById[0].params.map(e => e.name)])];

  const dialogData = {
    title: "",
    label: "",
    unit: "",
    paramNames: null,
    dateLabel: ""
  };

  switch (variant) {
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
      break;
    default:
      break;
  }

  return variant !== HIDDEN ? (
    <DialogComponent
      title={dialogData.title}
      label={dialogData.label}
      unit={dialogData.unit}
      paramNames={dialogData.paramNames}
      dateLabel={dialogData.dateLabel}
      selectedDate={selectedDate}
      onClose={() => setDialogState(HIDDEN)}
      setSelectedDate={setSelectedDate}
    />
  ) : null;
};

export default Dialog;

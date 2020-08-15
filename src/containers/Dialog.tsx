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

  // TODO: DRY - return one dialog component but with different params based on variant
  // if always returning component than we need to add classname --hidden back.
  // Currently just returning null, so no dialog is visible
  return (() => {
    switch (variant) {
      case REFILL:
        return (
          <DialogComponent
            title={"New Water Refill"}
            onClose={() => setDialogState(HIDDEN)}
            label={"Value"}
            unit={"mg/l"}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );
      case PARAMS:
        return (
          <DialogComponent
            title={"New Parameters"}
            onClose={() => setDialogState(HIDDEN)}
            paramNames={paramList}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );
      case AQUARIUM:
        return (
          <DialogComponent
            title={"New Aquarium"}
            onClose={() => setDialogState(HIDDEN)}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            label={"Aquarium Size"}
            unit={"l"}
            dateLabel={"Start Date"}
          />
        );

      default:
        return null;
    }
  })();
};

export default Dialog;

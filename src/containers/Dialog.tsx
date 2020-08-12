import * as React from "react";
import DialogComponent from "../components/DialogComponent";
import { useDispatch } from "react-redux";
import { DialogVariant, REFILL, PARAMS, AQUARIUM, HIDDEN } from "../actions";
import { UIActionTypes, SET_DIALOG_STATE } from "../actions";

const Dialog: React.FunctionComponent<{
  variant: DialogVariant;
}> = ({ variant }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const dispatch = useDispatch<React.Dispatch<UIActionTypes>>();
  const setDialogState = (variant: DialogVariant) =>
    dispatch({ type: SET_DIALOG_STATE, variant });

  // TODO: DRY - return one dialog component but with different params based on variant
  // if always returning component than we need to add classname --hidden back.
  // Currently just returning null, so no dialog is visible
  return (() => {
    switch (variant) {
      case REFILL:
        return (
          <DialogComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            title={"New Water Refill"}
            unit={"l"}
            onClose={() => setDialogState(HIDDEN)}
          />
        );
      case PARAMS:
        return (
          <DialogComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            title={"New Parameters"}
            unit={"mg/l"}
            onClose={() => setDialogState(HIDDEN)}
          />
        );
      case AQUARIUM:
        return (
          <DialogComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            title={"New Aquarium"}
            unit={"l"}
            onClose={() => setDialogState(HIDDEN)}
          />
        );

      default:
        return null;
    }
  })();
};

export default Dialog;

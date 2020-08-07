import * as React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CloseButton from "./CloseButton";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const Dialog: React.FunctionComponent<{
  isDialogOpen: boolean;
        <CloseButton />
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
);

export default Dialog;

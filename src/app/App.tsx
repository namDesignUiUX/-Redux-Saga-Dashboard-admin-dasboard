import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { useAppSelector } from "../setup/redux/hooks";
import ThemeProviderWrapper from "../_start/layout/theme/ThemeProvider";
import { dashboardsRoutes, auth, notAuth } from "./routes";

const App = () => {
  const selected = useAppSelector(({ auth }) => auth.user);
  const account = React.useState(selected);
  const content = useRoutes(
    account[0] || undefined ? [dashboardsRoutes, auth] : [notAuth]
  );
  return (
    <ThemeProviderWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProviderWrapper>
  );
};
export default App;

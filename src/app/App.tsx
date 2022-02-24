import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { useAppSelector } from "../setup/redux/hooks";
import ThemeProviderWrapper from "../_start/layout/theme/ThemeProvider";
import { auth, dashboardsRoutes, notAuth } from "./routes";

const App = () => {
  const { user, loading, _persist } = useAppSelector(({ auth }) => auth);
  const account = React.useState(user);
  const content = useRoutes(
    account[0]?.role === "role 1" || account[0] !== undefined
      ? [dashboardsRoutes, auth]
      : [notAuth]
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

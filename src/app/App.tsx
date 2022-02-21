import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import ThemeProviderWrapper from "../_start/layout/theme/ThemeProvider";
import { dashboardsRoutes, mainRoutes } from "./routes";

const App = () => {
  const content = useRoutes([mainRoutes, dashboardsRoutes]);
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
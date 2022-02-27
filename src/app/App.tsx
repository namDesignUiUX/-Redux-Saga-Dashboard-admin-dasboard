import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../setup/redux/hooks";
import ThemeProviderWrapper from "../_start/layout/theme/ThemeProvider";
import { auth, dashboardsRoutes, notAuth } from "./routes";
// Anchor JJS Template:
import { jssPreset, StylesProvider, makeStyles } from "@mui/styles";
import { create } from "jss";
import jssTemplate from "jss-plugin-template";
import { actions } from "./modules/auth";
const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    borderRadius: "3px",
    fontSize: "16px",
    border: 0,
    color: "white",
    height: "48px",
    padding: " 0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
    position: "absolute",
    right: "2%",
    bottom: "3%",
    zIndex: 9999,
  },
}));
// Anchor
export function Status() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  // setInterval(() => {
  //   console.log("Close");
  //   dispatch(actions.EndRunTime());
  // }, 3000);
  return (
    <button type="button" className={classes.root}>
      String templates
    </button>
  );
}

const App = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const account = React.useState(user);
  const content = useRoutes(
    account[0]?.role === "role 1" || account[0] !== undefined
      ? [dashboardsRoutes, auth]
      : [notAuth]
  );
  const isOpen = useAppSelector(({ messages }) => messages.isOpen);
  return (
    <ThemeProviderWrapper>
      <StylesProvider jss={jss}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
          {isOpen && <Status />}
        </LocalizationProvider>
      </StylesProvider>
    </ThemeProviderWrapper>
  );
};
export default App;

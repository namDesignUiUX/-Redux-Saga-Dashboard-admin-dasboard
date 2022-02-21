import Login from "./Login";

import React from "react";
import { FC, ReactNode } from "react";
interface SidebarLayoutProps {
  children?: ReactNode;
}
const LoginAndRegistered: FC<SidebarLayoutProps> = () => {
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};

export default LoginAndRegistered;

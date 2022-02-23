import React from "react";
import { useStore } from "react-redux";
import { useAppSelector } from "../../../setup/redux/hooks";

export const Products = () => {
  console.log("for-me");
  const store = useStore().getState();
  const isAuthorized = useAppSelector((state) => state.auth.user);

  console.log(isAuthorized)

  return (
    <React.Fragment>
      <div>
        {/* Why error render  */}
        {}
        {/* <p>{isAuthorized?.name}</p> */}
        <p>{(isAuthorized)?.email}</p>
        {/* <Product user={isAuthorized} /> */}
      </div>
    </React.Fragment>
  );
};
export default Products;

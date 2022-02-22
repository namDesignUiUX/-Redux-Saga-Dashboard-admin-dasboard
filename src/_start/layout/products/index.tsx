import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { useAppSelector } from "../../../setup/redux/hooks";
import Product from "./product";

export const Products = () => {
  console.log("for-me");
  const store = useStore().getState();
  const isAuthorized = useAppSelector(({ auth }) => auth.user);
  console.log(isAuthorized);
  console.log(store);
  return (
    <React.Fragment>
      <div>
        {/* Why error render  */}
        {isAuthorized}
        <Product user={isAuthorized} />
      </div>
    </React.Fragment>
  );
};
export default Products;

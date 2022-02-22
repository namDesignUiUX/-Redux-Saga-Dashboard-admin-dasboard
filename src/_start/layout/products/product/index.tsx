import React from "react";
import { UserModel } from "../../../../app/modules/auth";

function Product(props: ProductProps) {
  return <div>{props.user}</div>;
}
export interface ProductProps {
  user?: UserModel;
}
export default Product;

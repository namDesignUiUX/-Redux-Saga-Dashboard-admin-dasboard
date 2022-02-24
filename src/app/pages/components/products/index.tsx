import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../setup/redux/hooks";
import { Products } from "../../../../_start/layout/products";
import PageTitle from "../../../../_start/partials/content/PageTitle";
import PageTitleWrapper from "../../../../_start/partials/content/PageTitleWrapper";
import { Food } from "../../../../_start/partials/content/Table";
import * as auth from "../../../modules/auth";
import { getProducts } from "../../../modules/products";

function PageProducts() {
  const dispatch = useAppDispatch();
  const [foods, setFoods] = React.useState<Food[]>([]);
  let mounted = false;
  React.useEffect(() => {
    getProducts()
      .then((res) => {
        dispatch(auth.actions.getProducts(res));
        setFoods(res);
        mounted = true;
      })
      .catch((err) => {});
  }, []);
  return (
    <React.Fragment>
      <PageTitleWrapper>
        <PageTitle
          heading="Products"
          subHeading="Products allow users to take actions, and make choices, with a single tap."
          docs="https://material-ui.com/components/buttons/"
          showDocs={false}
          showSearch={true}
          showAdd={true}
        />
      </PageTitleWrapper>
      <Products foods={foods} />
    </React.Fragment>
  );
}

export default PageProducts;

import React from "react";
import Products from "../../../../_start/layout/products";
import PageTitle from "../../../../_start/partials/content/PageTitle";
import PageTitleWrapper from "../../../../_start/partials/content/PageTitleWrapper";

function PageProducts() {
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
        <Products />
    </React.Fragment>
  );
}

export default PageProducts;

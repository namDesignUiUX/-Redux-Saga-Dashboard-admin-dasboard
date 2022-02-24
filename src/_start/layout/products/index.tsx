import { Container, Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../setup/redux/hooks";
import * as Table from "../../partials/content/Table";
import { FoodStatus, Food } from "../../partials/content/Table";
import TableView from "../../partials/content/Table/TableProduct";
import { subDays } from "date-fns";

export const Products = () => {
  const foods: Food[] = [
    {
      id: "id",
      status: "Open",
      name: "Name",
      price: "100.000đ",
      description: "sản phẩm ngon",
      image: "https://kenh14cdn.com/thumb_w/660/2020/6/13/61dc949f112aafa19b217bc45fff8a30-1592062367895317441119.jpg",
      category: [],
    },
  ];
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TableView foodInfos={foods} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Products;

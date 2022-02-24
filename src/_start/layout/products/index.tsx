import { Container, Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../setup/redux/hooks";
import * as Table from "../../partials/content/Table";
import { FoodStatus, Food } from "../../partials/content/Table";
import TableView from "../../partials/content/Table/TableProduct";
import { subDays } from "date-fns";

export const Products = (props: IProps) => {
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
            <TableView foodInfos={props.foods} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export interface IProps {
  foods: Food[];
}

export default Products;

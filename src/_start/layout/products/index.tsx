import { Container, Grid } from "@mui/material";
import React from "react";
import { Food } from "../../partials/content/Table";
import TableView from "../../partials/content/Table/TableProduct";

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

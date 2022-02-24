import { FC, ChangeEvent, useState, ReactNode } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  SelectChangeEvent,
  CardMedia,
  Avatar,
} from "@mui/material";

import Label from "../../../../layout/Label";
import { Food, FoodStatus, category } from "../interface";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "../../../content/Transactions/BulkActions";
import { styled } from "@mui/system";

interface RecentOrdersTableProps {
  className?: string;
  foodInfos: Food[];
}
interface Filters {
  status?: FoodStatus;
}
const getStatusLabel = (OrderFoodStatus: FoodStatus): JSX.Element => {
  const map = {
    Close: {
      text: "Close",
      color: "error",
    },
    Open: {
      text: "Open",
      color: "success",
    },
  };
  const { text, color }: any = map[OrderFoodStatus];
  return <Label color={color}>{text}</Label>;
};

const applyFilters = (foodInfos: Food[], filters: Filters): Food[] => {
  return foodInfos.filter((foodInfo) => {
    let matches = true;
    if (filters.status && foodInfo.status !== filters.status) {
      matches = false;
    }
    return matches;
  });
};
const applyPagination = (
  foodInfos: Food[],
  page: number,
  limit: number
): Food[] => {
  return foodInfos.slice(page * limit, page * limit + limit);
};
const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ foodInfos }) => {
  const [selectedfoodInfos, setSelectedfoodInfos] = useState<string[]>([]);
  const selectedBulkActions = selectedfoodInfos.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const statusOptions = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "Open",
      name: "Open",
    },
    {
      id: "Close",
      name: "Failed",
    },
  ];
  const handleStatusChange = (
    e: SelectChangeEvent<string>,
    child: ReactNode
  ): void => {
    let value: any = null;

    if (e.target.value !== "all") {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllfoodInfos = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedfoodInfos(
      event.target.checked ? foodInfos.map((foodInfo) => foodInfo.id) : []
    );
  };

  const handleSelectOnefoodInfo = (
    event: ChangeEvent<HTMLInputElement>,
    foodInfoId: string
  ): void => {
    if (!selectedfoodInfos.includes(foodInfoId)) {
      setSelectedfoodInfos((prevSelected) => [...prevSelected, foodInfoId]);
    } else {
      setSelectedfoodInfos((prevSelected) =>
        prevSelected.filter((id) => id !== foodInfoId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredfoodInfos = applyFilters(foodInfos, filters);
  const paginatedfoodInfos = applyPagination(filteredfoodInfos, page, limit);
  const selectedSomefoodInfos =
    selectedfoodInfos.length > 0 && selectedfoodInfos.length < foodInfos.length;
  const selectedAllfoodInfos = selectedfoodInfos.length === foodInfos.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || "all"}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recent Orders"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllfoodInfos}
                  indeterminate={selectedSomefoodInfos}
                  onChange={handleSelectAllfoodInfos}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedfoodInfos.map((foodInfo) => {
              const isfoodInfoSelected = selectedfoodInfos.includes(
                foodInfo.id
              );
              return (
                <TableRow hover key={foodInfo.id} selected={isfoodInfoSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isfoodInfoSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOnefoodInfo(event, foodInfo.id)
                      }
                      value={isfoodInfoSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {foodInfo.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {foodInfo.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      <Avatar
                        src={foodInfo.image}
                        alt={foodInfo.name}
                        variant="circular"
                      />
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {foodInfo.category}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(foodInfo.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredfoodInfos.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  foodInfos: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  foodInfos: [],
};

export default RecentOrdersTable;

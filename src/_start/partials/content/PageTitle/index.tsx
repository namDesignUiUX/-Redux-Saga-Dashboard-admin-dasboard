import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {
  Button,
  FormControl, Grid,
  InputAdornment,
  OutlinedInput,
  styled, Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { FC } from "react";
interface PageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  showDocs?: boolean;
  showSearch?: boolean;
  showAdd?: boolean;
}

// const MainContent = styled(Box)(
//   ({ theme }) => `
//     height: 100%;
//     display: flex;
//     flex: 1;
//     overflow: auto;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `
// );
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: #fff;
`
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

const PageTitle: FC<PageTitleProps> = ({
  heading = "",
  subHeading = "",
  docs = "",
  showDocs = false,
  showSearch = false,
  showAdd = false,
  ...rest
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      {showDocs && (
        <Grid item>
          <Button
            href={docs}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {heading} Documentation
          </Button>
        </Grid>
      )}
      {showAdd && (
        <Grid item>
          <Button
            href={docs}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Create {heading}
          </Button>
        </Grid>
      )}

      {showSearch && (
        <Grid item sm={5} alignItems={"center"}>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInputWrapper
              type="text"
              placeholder="Search terms here..."
              endAdornment={
                <InputAdornment position="end">
                  <ButtonSearch variant="contained" size="small">
                    Search
                  </ButtonSearch>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
};

PageTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  docs: PropTypes.string,
};

export default PageTitle;

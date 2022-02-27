import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { jssPreset, StylesProvider, makeStyles } from "@mui/styles";
import { FC } from "react";
import React from "react";
import { Box } from "@mui/system";
interface PageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  showDocs?: boolean;
  showSearch?: boolean;
  showAdd?: boolean;
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    borderRadius: "3px",
    fontSize: "16px",
    border: 0,
    color: "white",
    height: "48px",
    padding: " 0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
    position: "absolute",
    right: "50%",
    bottom: "50%",
    zIndex: 9999,
  },
}));
export function FormAddProducts() {
  const classes = useStyles();
  // setInterval(() => {
  //   console.log("Close");
  //   dispatch(actions.EndRunTime());
  // }, 3000);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  return (
    <div className={classes.root}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                defaultValue="Linnea77@hotmail.com"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue="pUbDTi7m3zrv2ga"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
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
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    setIsOpen(true);
  }
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
      {isOpen && <FormAddProducts />}
      {showAdd && (
        <Grid item>
          <Button
            // href={docs}
            // target="_blank"
            // rel="noopener noreferrer"
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            onClick={handleClick}
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

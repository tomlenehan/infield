import React from "react";
import { AppBar as MuiAppBar, Toolbar, Button, makeStyles, Grid, ThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";
import InfieldLogo from "../../static/images/logos/Infield-Logo-LG.png";
import theme from "./Theme";  // Import your custom theme here

const useStyles = makeStyles((theme) => ({
  sideBar: {
      width: '250px',
      minWidth: '250px',
      padding: '20px 20px',
      margin: '20px auto 0 auto',
      boxShadow: '0 0 6px hsl(210 14% 90%)',
  },
  logo: {
    width: "130px",
    marginRight: "10px",
  },
  toolbar: {
    justifyContent: "flex-end",
  },
}));

const AppBar = ({ user }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>  {/* Wrap the component with the ThemeProvider */}
      <MuiAppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Button color="inherit" component={Link} to="/">
              <img
                src={InfieldLogo}
                alt="InfieldLogo"
                className={classes.logo}
              />
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Button color="inherit" component={Link} to="/issues">
              Issues
            </Button>
          </Grid>
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
};

export default AppBar;

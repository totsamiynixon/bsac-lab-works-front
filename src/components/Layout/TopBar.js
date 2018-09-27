import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;

  if (props.isLoggedIn) {
      return (
          <div className={classes.root}>
              <AppBar position="static">
                  <Toolbar>
                      <Typography variant="title" color="inherit" className={classes.flex}>
                            Добро пожаловать, {props.name}!
                      </Typography>

                      <Button color="inherit"
                              // component={Link}
                              // to="/login"
                              onClick={props.logout}
                      >
                          Выход
                      </Button>
                      {/*<Button color="inherit"
                              component={Link}
                              to="/"
                      >
                          Лабораторные
                      </Button>*/}
                  </Toolbar>
              </AppBar>
          </div>
      );
  } else {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Lorem ipsum dolor sit amet
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
  }
}

ButtonAppBar.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

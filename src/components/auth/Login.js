import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoggedIn();
  }

  state = {
    name: "Cat in the Hat",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  setUserLoggedIn() {
    if (this.state.name && this.state.password) {
      localStorage.setItem("isLoggedIn", "true");
      this.props.history.push("/");
    }
  }

  checkLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.props.history.push();
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="loginForm">
        <Card className={classes.root}>
          <FormControl
            className={classes.input}
            onChange={this.handleChange("name")}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Введите логин
            </InputLabel>
            <Input id="input-with-icon-adornment" />
          </FormControl>
          <FormControl
            className={classes.input}
            onChange={this.handleChange("password")}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Введите пароль
            </InputLabel>
            <Input id="input-with-icon-adornment" />
          </FormControl>
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.setUserLoggedIn.bind(this)}
          >
            Войти
          </Button>
        </Card>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flexDirection: "column",
    width: "600px",
    padding: "30px",
    backgroundColor: theme.palette.background.paper
  },
  input: {
    marginBottom: "30px"
  }
});
export default withStyles(styles)(Login);

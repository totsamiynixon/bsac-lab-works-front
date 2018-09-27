import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginRequest } from "../../actions/user";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

    render() {
    const { classes } = this.props;

    return (
      <div className="loginForm">
        <Card className={classes.root}>
          <FormControl
            className={classes.input}
            onChange={this.handleChange("login")}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Введите логин
            </InputLabel>
            <Input />
          </FormControl>
          <FormControl
            className={classes.input}
            onChange={this.handleChange("password")}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Введите пароль
            </InputLabel>
            <Input />
          </FormControl>
          <FormControl className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                onClick={() => this.props.loginRequest(this.state.login, this.state.password)}
            >
              Войти
            </Button>
          </FormControl>
          <FormControl className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/registration"
            >
                Зарегистрироваться
            </Button>
          </FormControl>
        </Card>
      </div>
    );
  }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };
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
    backgroundColor: theme.palette.background.paper,
    marginTop: "-100px"
  },
  input: {
    marginBottom: "30px"
  },
  buttons: {
      paddingTop: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      justifyAlign: "space-around"
  }

});

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
     loginRequest: bindActionCreators(loginRequest, dispatch)
  }
};

const StyledLogin = withStyles(styles)(Login);

const WrappedStyledLogin = connect(mapStateToProps, mapDispatchToProps)(StyledLogin);

export default WrappedStyledLogin;

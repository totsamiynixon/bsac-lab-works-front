import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginRequest, clear } from "../../actions/user";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css"

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

            {this.props.alertMessage &&
            <div className={`alert ${this.props.alertType}`}>{this.props.alertMessage}</div>
            }

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
                className={"firstButton"}
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
                onClick={this.props.clearAlert}
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
    marginTop: "-130px"
  },
  firstButton:{
    paddingTop: "30px"
  },
  input: {
    marginBottom: "30px"
  },
  buttons: {
      paddingTop: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      justifyAlign: "space-around"
  }

});

const mapStateToProps = (state) => {
  return {
      alertType: state.alerts.type,
      alertMessage: state.alerts.message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
     loginRequest: bindActionCreators(loginRequest, dispatch),
     clearAlert: bindActionCreators(clear, dispatch)
  }
};

const StyledLogin = withStyles(styles)(Login);

const WrappedStyledLogin = connect(mapStateToProps, mapDispatchToProps)(StyledLogin);

export default WrappedStyledLogin;

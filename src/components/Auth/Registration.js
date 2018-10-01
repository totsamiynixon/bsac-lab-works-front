import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from "redux";
import { fetchGroups, fetchNames, submitRegister, errorMessage, clear } from "../../actions/user";
import "./styles.css"

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: '',
            fullname: '',
            login: '',
            pass: '',
            passConfirm: ''
        };
    }

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="registerForm">
                <Card className={classes.root}>

                    {this.props.alertMessage &&
                    <div className={`alert ${this.props.alertType}`}>{this.props.alertMessage}</div>
                    }

                    <FormControl className={classes.formControl}>
                        <InputLabel>Группа</InputLabel>
                        <Select
                            value={this.state.groupId}
                            onChange={this.handleGroupsChange}
                            inputProps={{
                                name: 'groupId',
                            }}
                        >
                            {this.props.groups.map((val, i) => {return <MenuItem value = {val.id} key = {i}>{val.name}</MenuItem>})}
                        </Select>
                        <FormHelperText>Выберите номер группы</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Имя</InputLabel>
                        <Select
                            value={this.state.fullname}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'fullname',
                            }}
                        >
                            {this.props.names.map((val, i) => {return <MenuItem value = {val.name} key = {i}>{val.name}</MenuItem>})}
                        </Select>
                        <FormHelperText>Выберите имя из списка, после того как выбрали группу</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Логин</InputLabel>
                        <Input
                            value={this.state.login}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'login',
                        }}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            value={this.state.pass}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'pass',
                            }}
                        />
                        {this.props.alertMessage ==="Пароли не совпадают!" ?
                            (<TextField
                                error
                                label="Повторите пароль"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                value={this.state.passConfirm}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'passConfirm',
                                }}
                            />)
                            :
                            (<TextField
                                label="Повторите пароль"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                value={this.state.passConfirm}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'passConfirm',
                                }}
                            />)
                        }
                    </FormControl>
                    <FormControl className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmitButton}
                        >
                            Зарегистрироваться
                        </Button>
                    </FormControl>
                    <FormControl className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/login"
                            onClick={this.props.clearAlert}
                        >
                            Отмена
                        </Button>
                    </FormControl>
                    {this.props.registered && this.props.history.push('/login')}
                </Card>
            </div>
        );
    };

    handleGroupsChange = event => {
        this.setState({ [event.target.name]: Number(event.target.value) });
        this.props.fetchNames(Number(event.target.value));
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmitButton = () => {
        if (!this.state.groupId || !this.state.fullname || !this.state.login || !this.state.pass || !this.state.passConfirm) {
            this.props.errorAlert("Заполните все поля!");
            console.log(this.state.groupId);
            console.log(this.state.fullname);
            console.log(this.state.login);
            console.log(this.state.pass);
            console.log(this.state.passConfirm);
        } else {
            if(this.state.pass !== this.state.passConfirm) {
                this.props.errorAlert("Пароли не совпадают!");
                console.log(this.state.pass);
                console.log(this.state.passConfirm);
            } else {
                this.props.submitRegister(
                    this.props.groups[this.state.groupId - 1].name,
                    this.state.fullname,
                    this.state.login,
                    this.state.pass,
                    this.state.passConfirm
                );
            }
        }
    };
}

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "600px",
        paddingBottom: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: theme.palette.background.paper,
        marginTop: "-180px",
        marginBottom: "20px"
    },
    buttons: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyAlign: "space-around",
        paddingTop: 30
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 600
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    }
});

const mapStateToProps = state => {
    return {
        groups: state.groups.group,
        names: state.names.name,
        registered: state.registration.registered,
        alertType: state.alerts.type,
        alertMessage: state.alerts.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: bindActionCreators(fetchGroups, dispatch),
        fetchNames: bindActionCreators(fetchNames, dispatch),
        submitRegister: bindActionCreators(submitRegister, dispatch),
        errorAlert: bindActionCreators(errorMessage, dispatch),
        clearAlert: bindActionCreators(clear, dispatch)
    }
};

const StyledRegistration = withStyles(styles)(Registration);

const WrappedStyledRegistration = connect(mapStateToProps, mapDispatchToProps)(StyledRegistration);

export default WrappedStyledRegistration;
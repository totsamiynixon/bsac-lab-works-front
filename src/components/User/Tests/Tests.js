import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";

import axios from "axios";
import Card from "@material-ui/core/Card/Card";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 700
    },
    buttons: {
        paddingTop: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyAlign: "space-around"
    }
});

class Tests extends React.Component {
    state = {
        tests: []
    };
    componentWillMount() {
        axios
            .get("/api/tests", {
                params: {
                    labId: this.props.match.params.labId
                }
            })
            .then(response => {
                this.setState({ tests: response.data });
            });
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            //TODO: this can be moved to own render method
                        }
                        {this.state.tests.map((row, index) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>
                                        {row.status == 1 ? (
                                            <Tooltip
                                                TransitionComponent={Zoom}
                                                title="Еще не пройден"
                                            >
                                                <CloseIcon style={{ color: "red" }} />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip TransitionComponent={Zoom} title="Уже пройден">
                                                <DoneIcon style={{ color: "green" }} />
                                            </Tooltip>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Tooltip TransitionComponent={Zoom} title="Пройти тест">
                                            <IconButton
                                                disabled={row.status == 2}
                                                component={Link}
                                                to={"/tests/pass/" + row.id}
                                            >
                                                <PlayArrowIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                <FormControl className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                    >
                        Завершить
                    </Button>
                </FormControl>
                <FormControl className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                    >
                        Выйти из теста
                    </Button>
                </FormControl>
            </Paper>
        );
    }
}

Tests.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tests);
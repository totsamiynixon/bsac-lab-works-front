import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, state) {
  id += 1;
  return { id, name, state };
}

const rows = [
  createData("Моделирование цифровых устройств", "Защищена"),
  createData("Синтез логических схем", "Отчет проверяется"),
  createData("Исследование работы шифраторов и дешифраторов", "Выполнил"),
  createData(
    "Исследование работы мультиплексоров и демультиплексоров",
    "Допущен к выполнению"
  ),
  createData("Исследование триггеров", "Не допущен"),
  createData("Исследование регистров памяти и регистров сдвига", "Не доступна")
];

class LabsTable extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  showMaterials = id => {
    this.handleClose();
    this.props.onShowMaterials(id);
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

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
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-owns={Boolean(anchorEl) ? "menu" : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={this.handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={() => this.showMaterials(row.id)}>
                        Посмотреть материалы
                      </MenuItem>
                      <MenuItem onClick={() => this.showMaterials(row.id)}>
                        Пройти тест
                      </MenuItem>
                      <MenuItem onClick={() => this.showMaterials(row.id)}>
                        Загрузить отчет
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>Выполнить</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

LabsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabsTable);

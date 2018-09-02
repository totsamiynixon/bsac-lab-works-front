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

class LabsTable extends React.Component {
  state = {
    anchors: []
  };

  handleClose = index => {
    const anchors = this.state.anchors;
    anchors[index] = null;
    this.setState({ anchors });
  };
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.rows) != JSON.stringify(nextProps.rows)) {
      this.setState({ anchors: [] });
    }
  }
  showMaterials = id => {
    let index = this.props.rows.findIndex(value => {
      return value.id == id;
    });
    this.handleClose(index);
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
            {this.props.rows.map((row, index) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-owns={
                        Boolean(this.state.anchors[index]) ? "menu" : null
                      }
                      aria-haspopup="true"
                      onClick={event => {
                        const anchors = this.state.anchors;
                        if (anchors[index] === "undefined") {
                          anchors.push(event.currentTarget);
                        } else {
                          anchors[index] = event.currentTarget;
                        }
                        this.setState({ anchors });
                      }}
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={this.state.anchors[index]}
                      open={Boolean(this.state.anchors[index])}
                      onClose={() => this.handleClose(index)}
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

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class MaterialsModalList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  renderListItems() {
    if (!this.props.materials) {
      return null;
    }
    return this.props.materials.map((item, index) => {
      return (
        <ListItem button href={item.link} target="_blank" key={index}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary={item.title} />
        </ListItem>
      );
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">{this.renderListItems()}</List>
      </div>
    );
  }
}

MaterialsModalList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialsModalList);

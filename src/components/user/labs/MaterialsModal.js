import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import MaterialsItemsList from "./MaterialsModaltemsList";
class MaterialsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={() => {
          this.props.onModalClose();
        }}
      >
        <DialogTitle>
          {this.props.materials != null && this.props.materials.length > 0
            ? "Выберите файлы, которые хотите просмотреть"
            : "Материалы к работе"}
        </DialogTitle>
        <DialogContent>
          {this.props.materials != null && this.props.materials.length > 0 ? (
            <MaterialsItemsList materials={this.props.materials} />
          ) : (
            <Typography>Нет материалов</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.onModalClose();
            }}
            color="primary"
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

MaterialsModal.propTypes = {
  open: PropTypes.bool,
  onModalClose: PropTypes.func,
  labWorkId: PropTypes.number
};

// We need an intermediary variable for handling the recursive nesting

export default withMobileDialog()(MaterialsModal);

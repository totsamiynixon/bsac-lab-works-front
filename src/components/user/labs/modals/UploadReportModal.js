import DropZoneModal from "material-ui-dropzone";
import React, { Component } from "react";

export default class UploadReportModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  closeDialog() {
    this.props.onClose();
  }

  saveFiles(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({ files: files });
    this.onSave(files);
    this.closeDialog();
  }

  deleteFile(fileName) {
    this.props.deleteFile(fileName);
  }

  render() {
    //If we already saved files they will be shown again in modal preview.
    let files = this.state.files;
    let style = {
      addFileBtn: {
        marginTop: "15px"
      }
    };

    return (
      <DropZoneModal
        open={this.props.open}
        saveFiles={this.saveFiles.bind(this)}
        deleteFile={this.deleteFile.bind(this)}
        acceptedFiles={[
          "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
        ]}
        files={files}
        showPreviews={true}
        maxSize={5000000}
        closeDialog={this.closeDialog.bind(this)}
      />
    );
  }
}

import React from "react";

import LabsTable from "./labs/LabsTable";
import MaterialsModal from "./labs/MaterialsModal";
import SubjectsAutocomplete from "./labs/SubjectsAutocomplete";
class Labs extends React.Component {
  state = {
    open: false,
    materialsId: null
  };
  handleShowMaterials = labWorkId => {
    console.log("showMaterialsClickedCatchedFromLabs");
    this.setState({ open: true, labWorkId: labWorkId });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div style={{ padding: "50px" }}>
          <SubjectsAutocomplete />
          <LabsTable onShowMaterials={this.handleShowMaterials} />
          <MaterialsModal
            open={this.state.open}
            onModalClose={this.handleModalClose}
            labWorkId={this.state.labWorkId}
          />
        </div>
      </div>
    );
  }
}

export default Labs;

import React from "react";
import axios from "axios";

import LabsTable from "./labs/LabsTable";
import MaterialsModal from "./labs/modals/MaterialsModal";
import UploadReportModal from "./labs/modals/UploadReportModal";
import SubjectsAutocomplete from "./labs/SubjectsAutocomplete";

//TODO:Implement flux or redux
class Labs extends React.Component {
  state = {
    openMaterialsModal: false,
    openReportModal: false,
    subjects: [],
    labs: [],
    materials: [],
    reports: []
  };

  handleShowMaterials = labId => {
    axios
      .get("/api/materials", {
        params: {
          labId
        }
      })
      .then(response => {
        this.setState({ materials: response.data, openMaterialsModal: true });
      });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    axios.get("/api/subjects").then(response => {
      this.setState({ subjects: response.data });
    });
  }

  loadLabs = subjectId => {
    axios
      .get("/api/labs", {
        params: {
          subjectId
        }
      })
      .then(response => {
        this.setState({ labs: response.data });
      });
  };

  handleUploadReportModalClose() {
    this.setState({ openReportModal: false });
  }

  handleSaveFiles(labId, files) {
    formData.append("labId", labId);
    formData.append("files", files);
    axios.post("api/uploads/report", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  render() {
    return (
      <div>
        <div style={{ padding: "50px" }}>
          <SubjectsAutocomplete
            options={this.state.subjects.map((item, index) => {
              return {
                label: item.name,
                value: item.id
              };
            })}
            onChange={this.loadLabs}
          />
          <LabsTable
            rows={this.state.labs}
            onShowMaterials={this.handleShowMaterials}
          />
          <MaterialsModal
            open={this.state.openMaterialsModal}
            onModalClose={this.handleModalClose}
            materials={this.state.materials}
          />
          <UploadReportModal
            open={this.state.openMaterialsModal}
            reports={this.state.reports}
            onSave={this.handleSaveFiles.bind(this)}
            onClose={this.handleReportModalClose.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Labs;

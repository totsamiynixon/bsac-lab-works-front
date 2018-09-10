import React from "react";
import axios from "axios";

import LabsTable from "./labs/LabsTable";
import MaterialsModal from "./labs/modals/MaterialsModal";
//import UploadReportModal from "./labs/modals/UploadReportModal";
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

  componentDidMount() {
    axios.get("/api/subjects").then(response => {
      this.setState({ subjects: response.data });
    });
  }

  //Subjects
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

  //Materials
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

  handleMaterialsModalClose = () => {
    this.setState({ openMaterialsModal: false });
  };

  //Reports
  handleShowReports = labId => {
    axios
      .get("/api/reports", {
        params: {
          labId
        }
      })
      .then(response => {
        this.setState({ reports: response.data, openReportModal: true });
      });
  };

  handleReportsModalClose() {
    this.setState({ openReportModal: false });
  }

  handleSaveReports(payload) {
    var formData = new FormData();
    formData.append("labId", payload.labId);
    formData.append("files", payload.files);
    axios.post("api/reports/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  handleDeleteReport(reportId) {
    var formData = new FormData();
    axios
      .delete("api/reports", {
        params: {
          id: reportId
        }
      })
      .then(() => {
        const { reports } = this.state.reports;
        let index = reports.findIndex(item => item.id == reportId);
        if (index != null) this.setState(this.splice(index, 1));
      });
  }
  render() {
    return (
      <div>
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
          onShowReports={this.handleShowReports}
        />
        <MaterialsModal
          open={this.state.openMaterialsModal}
          onModalClose={this.handleMaterialsModalClose}
          materials={this.state.materials}
        />
        {/*<UploadReportModal
            open={this.state.openReportModal}
            reports={this.state.reports}
            onSave={this.handleSaveFiles.bind(this)}
            onDelete={this.handleDeleteReport.bind(this)}
            onClose={this.handleReportsModalClose.bind(this)}
          />*/}
      </div>
    );
  }
}

export default Labs;

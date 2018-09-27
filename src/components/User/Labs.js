import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LabsTable from "./labs/LabsTable";
import MaterialsModal from "./labs/modals/MaterialsModal";
import SubjectsAutocomplete from "./labs/SubjectsAutocomplete";

import { fetchSubjects } from "../../actions/subjects/subjects";
import { fetchLabs } from "../../actions/labs/labs";
import { fetchMaterials, closeMaterialsModal } from "../../actions/materials/materials";

class Labs extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          openMaterialsModal: false,
          openReportModal: false,
          reports: []
      };
  }

  componentDidMount() {
      this.props.fetchSubjects();   // dispatch асинхронного action получения массива subjects
  }

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
          <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column',
              paddingRight: "100px",
              paddingLeft: "100px"
          }}>
              <div style={{width: "100%"}}>
                <SubjectsAutocomplete
                    options={this.props.subject.map((item) => {
                        return {
                            label: item.name,
                            value: item.id
                        };
                    })}
                    onChange={this.props.fetchLabs}
                />
                <LabsTable
                    rows={this.props.lab}
                    onShowMaterials={this.props.fetchMaterials}
                    onShowReports={this.handleShowReports}
                />
                <MaterialsModal
                    open={this.props.openMaterialsModal}
                    onModalClose={this.props.closeMaterialsModal}
                    materials={this.props.material}
                />
              </div>
          </div>
      );
  }
}

const mapStateToProps = state => {
    return {
        subject: state.subjects.subj,
        lab: state.labs.lab,
        material: state.materials.material,
        openMaterialsModal: state.materials.openMaterialsModal
    };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchSubjects: bindActionCreators(fetchSubjects, dispatch),
      fetchLabs: bindActionCreators(fetchLabs, dispatch),
      fetchMaterials: bindActionCreators(fetchMaterials, dispatch),
      closeMaterialsModal: bindActionCreators(closeMaterialsModal, dispatch)
  }
};

const WrappedLabs = connect(mapStateToProps, mapDispatchToProps)(Labs);

export default WrappedLabs;

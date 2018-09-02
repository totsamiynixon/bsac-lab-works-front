import React from "react";
import axios from "axios";

import LabsTable from "./labs/LabsTable";
import MaterialsModal from "./labs/MaterialsModal";
import SubjectsAutocomplete from "./labs/SubjectsAutocomplete";

//TODO:Implement flux or redux
class Labs extends React.Component {
  state = {
    open: false,
    subjects: [],
    labs: [],
    materials: []
  };

  handleShowMaterials = labId => {
    axios
      .get("/api/materials", {
        params: {
          labId
        }
      })
      .then(response => {
        this.setState({ materials: response.data, open: true });
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
            open={this.state.open}
            onModalClose={this.handleModalClose}
            materials={this.state.materials}
          />
        </div>
      </div>
    );
  }
}

export default Labs;

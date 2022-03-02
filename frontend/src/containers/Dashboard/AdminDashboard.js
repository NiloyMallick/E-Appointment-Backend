import React from "react";
import ContactDataList from "../../components/Admin/ContactDataList";
import EmployeeSignup from "../../components/Admin/EmployeeSignup";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div class="m-5">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">Create Employee</h5>
                <EmployeeSignup baseurl={this.props.base_url}/>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Contact Form Data</h5>
                <ContactDataList baseurl={this.props.base_url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;

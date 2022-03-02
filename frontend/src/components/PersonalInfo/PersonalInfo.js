
import React from "react";

class PersonalInfo extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div class="row">
          <div class="col">
            <div class="card border-info mb-3">
              <div class="card-header">Personal Info</div>
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="font-weight-bold">
                      ID:{" "}
                      <b>
                        <span id="id">{this.props.personal_info.id}</span>
                      </b>
                    </div>
                    <div class="font-weight-bold">
                      Name:{" "}
                      <b>
                        <span id="name">{this.props.personal_info.name}</span>
                      </b>
                    </div>
                    <div class="font-weight-bold">
                      Email:{" "}
                      <b>
                        <span id="email">{this.props.personal_info.email}</span>
                      </b>
                    </div>
                    <div class="font-weight-bold">
                      Total Appointments:&nbsp;
                      <b>
                        <span class="text-info" id="total_appointments">{this.props.appointment_counts.total_appointments}</span>
                      </b>
                    </div>
                  </div>
                  <div class="col">
                    <div class="font-weight-bold">
                      Accepted:&nbsp;
                      <b>
                        <span
                          class="text-success"
                          id="accepted_appointments"
                        >{this.props.appointment_counts.accepted_appointments}</span>
                      </b>
                    </div>
                    <div class="font-weight-bold">
                      Pending:&nbsp;
                      <b>
                        <span class="text-info" id="pending_appointments">{this.props.appointment_counts.pending_appointments}</span>
                      </b>
                    </div>
                    <div class="font-weight-bold">
                      Declined:&nbsp;
                      <b>
                        <span
                          class="text-warning"
                          id="declined_appointments"
                        >{this.props.appointment_counts.declined_appointments}</span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PersonalInfo;
